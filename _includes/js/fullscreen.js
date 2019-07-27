function getFullscreenBg() {
    let hash = window.location.hash;
    if (!hash || hash.length > 3) {
        hash = "#i";
    } else {
        hash += "i";
    }
    if(history.pushState) {
        history.pushState(null, null, hash);
    }

    let container = document.createElement("div");
    container.className = "fullscreen-bg";

    let close = document.createElement("div");
    close.innerHTML = "✕";
    close.className = "fullscreen-close";
    close.addEventListener("click", () => container.remove())
    container.appendChild(close);
    window.addEventListener("hashchange", () => {
        container.remove();
    });

    document.body.appendChild(container);
    return container;
}

function fullscreenify(element) {
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    if ((window.innerWidth < window.innerHeight) != (width < height)) {
        let tmp = width;
        width = height;
        height = tmp;
        element.className += " vertical";
    }
    element.className += " fullscreenify";
    let zoom = Math.min(window.innerWidth/width, window.innerHeight/height);
    element.style.zoom = zoom * 0.9 * 100 + "%";
    element.style["-moz-transform"] = "scale(" + (zoom * 0.9) + ")";
    element.style.opacity = 1;
}

function showFullscreenText(txt) {
    let container = getFullscreenBg();
    container.style.textAlign = "center";
    let txtSpan = document.createElement("span");
    txtSpan.innerHTML = txt;
    txtSpan.style.opacity = 0;
    container.prepend(txtSpan);
    fullscreenify(txtSpan);
    return container;
}
