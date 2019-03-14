// localStorage.setItem('number', 1); //запись в localStorage: key - 'number', value - 1
// console.log(localStorage.getItem('number')); //получение из localStorage

// localStorage.removeItem('number'); //удаление из localStorage

// localStorage.clear(); //очистка всего localStorage

//при выделении чекбокса сохраняем значение в localStorage и при след. загр. страницы берем оттуда значение и меняем страницу в соответствии с ней
window.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.querySelector('#rememberMe'),
        change = document.querySelector('#change'),
        div = document.querySelector('div');

    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }

    if (localStorage.getItem('bgc') === 'pink') {
        div.style.backgroundColor = 'pink';
    }

    checkbox.addEventListener('click', function () { //когда отмечаем чекбокс 
        localStorage.setItem('isChecked', true); //в localStorage записываем 'isChecked', true
    });

    //меняем фон при нажатии на кнопку и сохраняем это в localStorage
    change.addEventListener('click', function () {
        div.style.backgroundColor = 'pink';
        localStorage.setItem('bgc', 'pink');
    });

    //записываем и получаем из localStorage объект
    let persone = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook']
    };

    let serializedPerson = JSON.stringify(persone); //превращаем объект в формат JSON
    localStorage.setItem('Alex', serializedPerson);
    console.log(JSON.parse(localStorage.getItem('Alex'))); //берем бывший объект из localStorage и превращаем обратно в объект
});