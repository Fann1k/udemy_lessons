let fun = () => {
    console.log(this);
};

fun();

// 1) Стрелочная ф-я анонимна
// 2) Стрелочная ф-я НЕ имеет своего контекста вызова

let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

// 2) она берет контекст у своего родителя

let btn = document.querySelector('button');
btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    };
    show();
});