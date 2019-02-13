// let arr = ['first', 2, 3, 'fourth', 5];


// // console.log(arr);

// //перебор массива
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function (element, i, mass) {
//     //element - каждый элемент в массиве
//     //i - номер элемента
//     //mass - сам массив
// });

// // for of - не работает на объектах, работает на строках, массивах, set, map и проч.

// let mass = [1, 3, 5, 6, 7];

// for (let key in mass) {
//     console.log(key); //получаем ключи, т.е 0, 1, 2, 3, 4 - порядковые номера элементов
// }

// for (let key of mass) {
//     console.log(key); //получаем значения, т.е 1, 3, 5, 6, 7 - порядковые номера элементов
// }

// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(','); //в массив arr записываем значения из ans, указываем что разделитель массива запятая, т.е - ','
// console.log(arr);

// let arr = ['arrr', 'zzz', 'pp', 'rqa'],
// i = arr.join(', '); //соединяем элементы массива, разделитель - запятая и пробел ', '

let arr = ['aawe', 'zzz', 'pp', 'rqa'],
    i = arr.sort(', '); //сортируем массив по алфавиту