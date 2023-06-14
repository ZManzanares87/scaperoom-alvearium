
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });

    document.onkeydown = function(e) {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
            e.preventDefault();
            alert("A dónde crees que vas pillín?");
        }
    };
