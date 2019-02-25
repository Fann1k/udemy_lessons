// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// // clearTimeout(timerId);

// function hello() {
//     console.log('hello');
// }

// let timerId = setTimeout(function log() {
//     console.log('hello');
//     setTimeout(log, 2000);
// });

// let btn = document.querySelector('.btn'),
//     elem = document.querySelector('.box');

// function myAnimation() {
//     let pos = 0;

//     let id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.getElementsByClassName.top = pos + 'px';
//             elem.getElementsByClassName.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.querySelectorAll('button');

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('hello');
    }
});