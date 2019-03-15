
let user = (function () {
    let private = function () {
        console.log("I am private");
    };
    return {
        sayHello: function () {
            console.log('Hello');
        }
    };
}());

console.log(user);
console.log(user.sayHello());