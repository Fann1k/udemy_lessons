//  1) function showThis(a, b) {
//     console.log(this); //в ES5 будет window, в ES6 - undefined
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(2, 5);

// 2) let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);

//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// 4) привязываем к ф-ии объект
let user = {
    name: 'John'
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
console.log(sayName.call(user, 'Smith')); // - call - можно передавать как атрибут только строку
console.log(sayName.apply(user, ['Snow'])); // - apply - можно передавать как атрибут массив

function count(number) {
    return this * number;
}
let double = count.bind(2); //в ф-ии count, this жестко присваиваем 2
console.log(double(5));

// 1) Просто при вызове ф-ии this = window/undefined
// 2) Если this вызывается в методе объекта (sum();), то this = сам объект. Но this внутри shout() = window, (shout - ф-я внутри ф-ии sum).
// 3) Конструктор (new), тогда this = новый созданный объект
// 4) Указание конкретного контекста для this: call, apply, bind