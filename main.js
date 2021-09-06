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
    if (str[leftItem] !== str[rightItem]){
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
