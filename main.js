// Работа с переменными
let user = 'John Doe';
console.log(user);
const student = 'Andrei';
console.log(student);
user = student;
// переменная перезапишется (присвоится)
console.log(user);
// Работа с примитивами
const test = 1 + 1 + '1';
// произошла конкатенация, неявное преобразвание в строку, бинарным +, если бы отнимали, было бы все ок:)

console.log(test, Boolean(test));
// булево значение - true. Так как строка не пустая

// РАБОТА С МАССИВАМИ
// 1. Произведение всех элементов массива
const array = [2, 3, 5, 8];
function incmultiplicationl (arr) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      return console.log('Введите числовое значение');
    } else {
      sum *= array[i];
    }
  }
  return sum;
}
console.log('Произведение всех элементов массива:', `${incmultiplicationl(array)}`);
// 2. Больше 5 меньше 10
const arrСhoice = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrСhoice.length; i++) {
  if (arrСhoice[i] > 5 && arrСhoice[i] < 10) {
    console.log('Элемент массива rrСhoice больше 5 но меньше 10:', `${arrСhoice[i]}`);
  }
}
// 2. Четные элементы массива arrHonest
const arrHonest = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arrHonest.length; i++) {
  if (arrHonest[i] % 2 === 0) {
    console.log('Четный элементы массива arrHonest:', `${arrHonest[i]}`);
  }
}

// Задание 1. Выполнение полиндрома в булевом представлении функции. Пока без оптимизаци. До конца не понял, в сравние в половину строки.

function isPolindrome (str) {
  for (let leftItem = 0, rightItem = str.length - 1; leftItem < str.length; leftItem++, rightItem--) {
    if (str[leftItem] !== str[rightItem]) {
      return false;
	 }
  }
  return true;
}

console.log(isPolindrome('казак'));

// Задание 2. Наибольшее число *Не использовал return
const numMax = (a, b) => a > b ? a : b;
console.log(numMax(25, 10));
// Наименьшее число *Не использовал return
const numMin = (a, b) => a < b ? a : b;
console.log(numMin(5, 8));

// Задание 3. Может не самый быстрый способ. Два раза replace, но работает:)Об оптимизации уже потом)
const arr = [0, 15, 10, 16, 28, 19, 50, 70, 85, 90];
function arrNum (strNum) {

  return strNum.toString().replace(/0/g, 'zero').replace(/\[|]/g, '').split(',');
}
console.log(arrNum(arr));

// Functions - part 2
// Напишите функцию sum, которая возвращает сумму чисел следующим образом:
const sum = (a) => (b) => {
  return a + b;
};
console.log(sum(2)(5));

// Покрасьте абзацы по клику (событие click):
const colorsArr = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];// Исходный массив цветов.
const СolorElement = document.getElementsByTagName('p'); // Метод поиска по странице, желательно пр id, но у всех общий - p)
for (let i = 0; i < СolorElement.length; i++) { // Цикл по найденному в документе.
  СolorElement[i].addEventListener('click', func()); // К каждому итовому элементу по поиску добавляем событие (обработчик) addEventListener что бы не перезаписывалось событие - click.
};

function func () { // Функция, которую мы записали в метод addEventListener
  let color = 0; // Начальный индекс нашего массива цветов, начальный отсчет.
  return function () { // Замыкание
    this.style.color = colorsArr[color]; // Добавляем непосредсвенно цвет к каждому итовому элементу, индексу массива. Можно и через переменную.
    color++;// Счетник, для смены цветов, в один шаг.
    if (color === colorsArr.length) { // Проверка, на длину массива. Если пробежались по всем цветам из массива. (true)
      return (color = 0); // Возвращаем начальное значание, дабы наш цикл, в смене цветов, был бесконечен.
    };
  };
};

//lesson-5
//Преобразование формата даты:
const date = "2020-11-26";
const DateStr = str=> {return str.split('-').reverse().join(".");}
console.log(DateStr(date));
//Поиск объектов размещения: 
const data = [
	{
	  country: 'Russia',
	  city: 'Saint Petersburg',
	  hotel: 'Hotel Leopold',
	},
	{
	  country: 'Spain',
	  city: 'Santa Cruz de Tenerife',
	  hotel: 'Apartment Sunshine',
	},
	{
	  country: 'Slowakia',
	  city: 'Vysokie Tatry',
	  hotel: 'Villa Kunerad',
	},
	{
	  country: 'Germany',
	  city: 'Berlin',
	  hotel: 'Hostel Friendship',
	},
	{
	  country: 'Indonesia',
	  city: 'Bali',
	  hotel: 'Ubud Bali Resort&SPA',
	},
	{
	  country: 'Netherlands',
	  city: 'Rotterdam',
	  hotel: 'King Kong Hostel',
	},
	{
	  country: 'Marocco',
	  city: 'Ourika',
	  hotel: 'Rokoko Hotel',
	},
	{
	  country: 'Germany',
	  city: 'Berlin',
	  hotel: 'Hotel Rehberge Berlin Mitte',
	},
 ];

function searchString(strArr, input){
	let sum = [];
	input=prompt ("Введите интересующее значение", "Пример: Germany").toLowerCase();
	for(let i=0;i<strArr.length;i++){
		let current = `${strArr[i].country} ${strArr[i].city} ${strArr[i].hotel}`.toLowerCase();
		if(current.includes(input)){
			sum.push(strArr[i]);
		};
	};
	return sum;
};
console.log(searchString(data)); //наверное так делать нельзя, но в целях разносторонниму мышлению)Один метод, второй уже срабатывает в функции)

