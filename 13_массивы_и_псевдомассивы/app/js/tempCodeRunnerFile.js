let mass = [1, 3, 5, 6, 7];

for (let key in mass) {
    console.log(key); //получаем ключи, т.е 0, 1, 2, 3, 4 - порядковые номера элементов
}

for (let key of mass) {
    console.log(key); //получаем значения, т.е 1, 3, 5, 6, 7 - порядковые номера элементов
}