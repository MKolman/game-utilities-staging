function changeScore(delta, event) {
    logGA("score_" + delta);
    let input = event.target.parentElement.querySelector("input");
    input.value = (+input.value) + delta;
}
