// IIFE
(() => {    

    function loadFlights() {
        fetch("https://opensky-network.org/api/states/all")
        .then((response) => response.json())
        .then((json) => {
            //reset: clear the GeoJSON layer
            map.removeLayer(gjLayer);
            
            const frCan = json.states.filter((flight) => flight[2] === "Canada");
            // Requirement 1:
            console.log("Data of aircrafts whose country of origin is Canada:");
            console.log(frCan);
            
            // map the raw data into GeoJSON
            const geojsonFeature = frCan.map((flight) => {
                return {
                            "type": "Feature",
                            "properties": {
                                "Callsign": flight[1],
                                "On Ground": flight[8],
                                "Geo Altitude": flight[13],
                                "True Track": flight[10]
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": [flight[5], flight[6]]
                            }
                        }
            });
            // output for requirement 2
            console.log("GeoJSON data:");
            console.log(geojsonFeature);

            // set up icons (https://leafletjs.com/examples/custom-icons/)
            var planeIcon = L.icon({
                iconUrl: 'plane.png',        
                iconSize:     [30, 30], // size of the icon
                iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
                popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
            });        
            
            const onEachFeature = (feature, layer) => {
                // form the string to display in popups. reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
                let propertiesStr = Object.keys(feature.properties).map((prop) => {
                    return prop + ": " + feature.properties[prop];
                }).join("<br />");
                layer.bindPopup(propertiesStr);
            }
            
            // GeoJSON objects are added to the map through a GeoJSON layer.
            gjLayer = L.geoJSON(geojsonFeature, {
                // implement icons and rotation
                pointToLayer: function (feature, latlng) {
                    markers = L.marker(latlng, {
                        icon: planeIcon,
                        rotationAngle: feature.properties["True Track"]
                    });

                    return markers;
                },

                // implement popups
                onEachFeature: onEachFeature
            }).addTo(map);

            // return geojsonFeature;
        });
    }

    //create map in leaflet and tie it to the div called 'theMap'
    let map = L.map('theMap').setView([42, -60], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    // Initialize the GeoJSON layer
    let gjLayer = L.geoJSON([]).addTo(map);
    
    // Use nested setTimeout to reload the page. Reference: https://javascript.info/settimeout-setinterval
    setTimeout(function run() {        
        loadFlights();
        setTimeout(run, 7000);
    }, 0);
    
})()