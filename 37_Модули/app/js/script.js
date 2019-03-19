//вид модуля №1 - функциональное выражение - function declaration, анониманая ф-я выполняющаяся сама по себе, без вызова
// let number = 1;

// (function () {
//     let number = 2;
//     console.log(number);

//     return console.log(number + 3);
// }()); //

// console.log(number);

//видно только тот элемент, который возвращаем через return

// let user = (function () {
//     let private = function () {
//         console.log("I am private");
//     };
//     return { //возвращаем
//         sayHello: function () { //ф-ю, которыую тут же и пишем
//             console.log('Hello');
//         }
//     };
// }());

// console.log(user);
// console.log(user.sayHello());

let user = (function () {
    let private = function () {
        console.log("I am private");
    };
    let sayHello = function () {
        console.log('Hello');
    };
    return {
        sayHello: sayHello //возвращаем ф-ю, которую написали ранее
    };
}());

console.log(user);
console.log(user.sayHello());