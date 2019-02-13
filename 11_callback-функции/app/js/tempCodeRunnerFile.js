
function learnJS(lang, callback) {
    console.log('Я учу ' + lang);
    callback();
}

function done() {
    console.log('Я прошел 3 урок!');
}

learnJS('JS', done);