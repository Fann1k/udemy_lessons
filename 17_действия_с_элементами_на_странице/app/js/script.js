let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'), //можно исп-ть вложенность
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

heart.forEach(function (element) {
    element.style.backgroundColor = 'blue';
});

let div = document.createElement('div'),
    text = document.createTextNode('Здесь был я');

div.classList.add('black');

document.body.appendChild(div); //в конец body вставляем div
document.body.removeChild(div); //удаляем div внутри body

wrapper.appendChild(div); //в конец wrapper вставляем div
wrapper.removeChild(div); //удаляем div внутри wrapper

div.innerHTML = '<h1>Some Text</h1>'; //в div вставляем текст с разметкой html
div.textContent = 'Only Text'; //в div вставляется только текст

document.body.insertBefore(div, circle[0]); //ПЕРЕД circle[0] вставляем div
document.body.replaceChild(btn[1], circle[1]); //ВМЕСТО circle[1] вставляем btn[1]