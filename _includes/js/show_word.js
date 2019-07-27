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
    let lang = document.querySelector('input[name="lang"]:checked').value;
    logGA("word_" + key + '_' + lang);
    let word = randomElement(WORDLIST[lang][key]);
    countDown(3, () => showFullscreenText(word));
}
