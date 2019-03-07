//разворачивает массив и превращает его в набор данных
let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
//выведется ["youtube", "vimeo", "rutube", "wordpress", "livejournal", "blogger", "vk", "facebook"]

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2, 5, 7];

log(...numbers); //в качестве аргументов в a,b,c передадутся 2, 5, 7