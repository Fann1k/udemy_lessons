let btn = document.querySelectorAll('button'),
	// btn = document.getElementsByTagName('button'),
	wrap = document.querySelector('.wrapper'),
	link = document.querySelector('a');

// btn[0].onclick = function () {
// 	alert('Вы нажали кнопку!');
// };

// btn[0].onclick = function () {
// 	alert('Вы опять нажали кнопку!');
// };

// btn[0].addEventListener('click', function () {
// 	alert('Вы нажали кнопку!');
// 	alert('Вы опять нажали кнопку!');
// });

// btn[0].addEventListener('click', function (event) {
// 	console.log('Произошло событие на элементе ' + event.type + ' на элементе ' + event.target);
// 	let target = event.target;
// 	target.style.display = 'none';
// });

link.addEventListener('click', function (event) {
	event.preventDefault();
	console.log('Произошло событие на элементе ' + event.type + ' на элементе ' + event.target);
});

btn.forEach(function (item) {
	item.addEventListener('mouseleave', function () {
		console.log('Вышли!');
	});
});