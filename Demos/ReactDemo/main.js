(() => {

    // pure - vanilla javaScript
    // let divNote = document.getElementById("target");
    // divNote.innerText = "Hello, from Vanilla JS";

    // React way

    // JSX
    const myStyles = {
        backgroundColor: "red",
        fontStyle: "italic"
    };


    const Component1 = 
        <div id="test" style={ myStyles }>
            <h3>Welcome to Component 1</h3>
            <p>React Competitors</p>
            <ul>
                <li>Angular</li>
                <li>Ember</li>
                <li>Vue</li>
            </ul>

            {/* javascript inside curl brackets */}
            {alert("got here")}
        </div>;
        

    ReactDOM.render(Component1, app);

})();