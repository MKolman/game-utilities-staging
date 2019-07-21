function getFullscreenBg() {
    let container = document.createElement("div");
    container.className = "fullscreen-bg";

    let close = document.createElement("div");
    close.innerHTML = "✕";
    // close.innerHTML = "x";
    close.className = "fullscreen-close";
    close.addEventListener("click", () => container.remove())
    container.appendChild(close);

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

function showFullscreenInput() {
    let containerBg = getFullscreenBg();
    let container = document.createElement("div");
    container.className = "container";
    containerBg.appendChild(container);
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    container.appendChild(input);
    input.focus();

    let showBtn = document.createElement("div");
    showBtn.className = "btn btm";
    showBtn.innerHTML = "<span>SHOW</span>";
    showBtn.addEventListener("click", () => {
        input.blur();
        let firstTxt = showFullscreenText(input.value);
        setTimeout(() => {
            if (document.body.contains(firstTxt)) {
                showFullscreenText(input.value);
                firstTxt.remove();
            }
        }, 1000);

    });
    container.appendChild(showBtn);
}

function showFullscreenCanvas() {
    let container = getFullscreenBg();
    let canvas = document.createElement("canvas");
    canvas.className = "fullscreen-bg";
    canvas.width = 2*window.innerWidth;
    canvas.height = 2*window.innerHeight;
    container.prepend(canvas);
    initializeDraw(canvas);
}

function randomElement(collection) {
   return collection[Math.floor(Math.random() * collection.length)];
}
function countDown(numSeconds, callback) {
    if (numSeconds == 0) {
        callback();
        return;
    }
    let txt = ["Zero", "One", "Two", "Three"][numSeconds] || numSeconds;
    let container = showFullscreenText(txt + "");
    setTimeout(() => {
        if (document.contains(container)) {
            container.remove();
            countDown(numSeconds-1, callback);
        }
    }, 1000);
}
function showRandomWord(key) {
    let word = randomElement(WORDLIST[key]);
    countDown(3, () => showFullscreenText(word));
}

function showDisplaySize() {
    let str = "";
    str += "window.innerWidth: " + window.innerWidth
            + "<br> window.innerHeight: " + window.innerHeight + "<br>";
    str += "window.outerWidth: " + window.outerWidth
            + "<br> window.outerHeight: " + window.outerHeight + "<br>";
    for (let i in screen) {
        str += i + ": " + screen[i] + "<br/>";
    }
    showFullscreenText(str);
}

// showDisplaySize();