let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier; //с помощью __proto__ сделали john потомком soldier
console.log(john);
console.log(john.armor); //у john нет св-а armor, но есть у его прототипа, оно и выводится