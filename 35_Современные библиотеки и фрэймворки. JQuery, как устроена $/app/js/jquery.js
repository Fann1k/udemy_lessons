// //в jquery
// $('#btn');
// $('.btn'); //перебирает все элементы и выполняет действия, как forEach в js

$(document).ready(function () { //вместо addEventListener('DOMContentLoaded') - .ready()
    $('.list-item:first').hover(function () { //берем 1 элемент с классом .list-item и при наведении мыши
        $(this).toggleClass('active'); //добавляем класс active
    });

    //правильное назанчение обработчика событий!
    $('.list-item:eq(2)').on('click', function () { //берем 2 элемент с классом .list-item и при клике
        $('.image:even').fadeToggle('slow'); //красиво скрываем его
    });

    $('.list-item:eq(4)').on('click', function () {
        $('.image:odd').animate({
            opacity: 'toggle', //при нажатии покказвыать/исчезать
            height: 'toggle' //убирать/возвращать высоту
        }, 1000);
    });
});