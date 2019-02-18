let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'), //можно исп-ть вложенность
    oneHeart = document.querySelector('.heart');

console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]); //если псевдомассивы, то можно обращаться к элементам
console.log(heart[1]);
console.log(oneHeart);