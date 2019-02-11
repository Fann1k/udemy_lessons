let num = 50;

//делаем пока верно условие
// while (num < 55) {
//     console.log(num);
//     num++;
// }

//что-то делаем, потом проверяем
// do {
//     console.log(num);
//     num++;
// }
// while (num < 56);

for (i = 1; i < 8; i++) {
    console.log(i)
}

for (i = 1; i < 8; i++) {
    if (i == 6) {
        break //выходим из цикла
    }
    console.log(i);
}

for (i = 1; i < 8; i++) {
    if (i == 6) {
        continue //пропускаем этот шаг
    }
    console.log(i);
}

