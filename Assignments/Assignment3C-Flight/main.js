// IIFE
(() => {    

    fetch("https://opensky-network.org/api/states/all")
    .then((response) => response.json())
    .then((json) => {
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
            iconSize:     [20, 20], // size of the icon
            iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
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
        L.geoJSON(geojsonFeature, {
            // implement icons and rotation
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, {
                    icon: planeIcon,
                    rotationAngle: feature.properties["True Track"]
                });
            },

            // implement popups
            onEachFeature: onEachFeature
        }).addTo(map);

        return geojsonFeature;
    });

    //create map in leaflet and tie it to the div called 'theMap'
    let map = L.map('theMap').setView([42, -60], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


    // L.marker([42, -60]).addTo(map)
    //     .bindPopup('This is a sample popup. You can put any html structure in this including extra flight data. You can also swap this icon out for a custom icon. Some png files have been provided for you to use if you wish.');

    


})()