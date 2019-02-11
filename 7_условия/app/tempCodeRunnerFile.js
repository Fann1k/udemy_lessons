let num = 50;

if (num < 49) {
    console.log('Неверно!');
}
if (num > 100) {
    console.log('Неверно!');
}
if (num == 50) {
    console.log('Верно!');
}

switch (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Неверно!');
        break;
    case 50:
        console.log('Верно!');
        break;
}