function shake(selector) {
    var element = document.querySelector(selector);
    
    // we need to remove the CSS class once the shaking effect is finished
    element.addEventListener("animationend", (e) => {
        element.classList.remove("shaking");
    });    

    element.classList.add("shaking");
}

function fade(selector, opacity, interval) {
    var element = document.querySelector(selector);
    element.style.setProperty("-webkit-transition","opacity "+interval);
    element.style.setProperty("transition","opacity "+interval);
    element.style.setProperty("opacity",opacity);
}