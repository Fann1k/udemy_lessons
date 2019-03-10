let drink = 0;

function shoot(arrow) { //выполняется ф-я shoot
    console.log('Вы сделали выстрел...'); //выводится сообщение в консоль

    let promise = new Promise(function (resolve, reject) { //создается новый Promise с двумя аргументами - resolve и reject
        setTimeout(function () { //ф-я запустится через 3 сек.
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись'); //resolve - выполнится, если условие true; reject - выполнится, если условие false
        }, 3000);
    });

    return promise; //возвращаем promise
};

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer(): giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво');
}

function giveMoney() {
    console.log('Вам заплатили');
}

function loose() {
    console.log('Вы проиграли');
}

//когда Promise выполняется и вызывается состояние resolve, то выполняем ф-ии с помощью .then
shoot({}) //запускается ф-я shoot, в которой
    .then(function (mark) { //выполнятеся ф-я
        console.log('Вы попали в цель!'); //и в консоль выводится сообщение
    })
    .then(win) //далее выполнятеся ф-я win
    //когда Promise выполняется и вызывается состояние reject, то выполняем ф-ии с помощью .catch
    .catch(loose) //выполнятеся ф-я loose
// .then - если прописать .then после catch, то эта ф-я будет выполняться всегда, независимо от сотсояние resolve/reject