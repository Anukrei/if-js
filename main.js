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
// произошла конктациная, неявное преобразвание в строку, бинарным +, если бы отнимали, было бы все ок:)

console.log(test, Boolean(test));
// булево значение - true. Так как строка не пуская

// РАБОТА С МАССИВАМИ
// 1. Произведение всех элементов массива
const array = [2, 3, 5, 8];
function incmultiplicationl (arr) {
  let sum = 1;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      return console.log('Введите числовое значение');
    } else {
      sum = sum * array[i];
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
    console.log('Четный элемент массива arrHonest:', `${arrHonest[i]}`);
  }
}
