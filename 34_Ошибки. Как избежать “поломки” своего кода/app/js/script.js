try {
    console.log('Normal'); //если нет ошибок, то выполнится только try
} catch {
    console.log('error'); //catch пропустится
}

try {
    console.log('Начинаем работу');
    console.log(a); //если есть ошибка, то на ней выполнение кода останавливается и перескакивает на catch
    console.log('Результат');
} catch (error) { //у catch есть встроенный объект
    console.log(error); //можно вывести его, там вся инф-я об ошибке
}
console.log('выполнение продолжается'); //после catch выполнение кода продолжается

try {
    console.log('Начинаем работу');
    console.log(a);
    console.log('Результат');
} catch (error) { //у catch есть встроенный объект
    console.log(error.name); //можно вывести его имя
    console.log(error.message); //можно вывести его описание
    console.log(error.stack); //можно вывести набор вызовов, которые привели к ошибке
    console.log(`Мы получили ошибку: ${error.name}`); //вывели имя ошибки
}


let json = '{"id" : 2}'; //эмулируем JSON файл
try {
    let user = JSON.parse(json); //парсим JSON в объект
    console.log(user);
    if (!user.name) { //если внутри объекта нет {name : что-то}, то 
        throw new Error('В этих данных нет имени') //создаем свою ошибку и выкидываем ее в catch
    }
} catch (error) {
    console.log(`Мы получили ошибку: ${error.name}`);
    console.log(error);
} finally {
    console.log('необязательная часть, которая выполнится всегда');
}