(() => {
    const modifyDiv = () => {
        // let targetNode = document.querySelector("#target");

        let targetNodes = document.querySelectorAll(".toChange");        

        for (let i = 0; i < targetNodes.length; i++) {
            targetNodes[i].innerHTML = "Hello from the <em>JS</em> file";
            targetNodes[i].style.backgroundColor = "red";
            targetNodes[i].style.marginBottom = "20px";
        }
    };

    // event listeners
    // document.querySelector("#target").addEventListener("click", modifyDiv);
    document.querySelector("#target").addEventListener("mouseover", modifyDiv);

})();