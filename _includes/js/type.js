function showFullscreenInput() {
    logGA('type');
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
