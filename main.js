// Lesson-8
const studentsData = [
	{
	  firstName: "Василий",
	  lastName: "Петров",
	  admissionYear: 2019,
	  courseName: "Java",
	},
	{
	  firstName: "Иван",
	  lastName: "Иванов",
	  admissionYear: 2018,
	  courseName: "JavaScript",
	},
	{
	  firstName: "Александр",
	  lastName: "Федоров",
	  admissionYear: 2017,
	  courseName: "Python",
	},
	{
	  firstName: "Николай",
	  lastName: "Петров",
	  admissionYear: 2019,
	  courseName: "Android",
	},
 ];
 
 class User {
	constructor(arrStudent) {
	  this.firstName = arrStudent.firstName;
	  this.lastName = arrStudent.lastName;
	}
	get fullName() {
	  return `${this.firstName} ${this.lastName}`;
	}
 }
 
 class Student extends User {
	constructor(arrStudent) {
	  super(arrStudent);
	  this.admissionYear = arrStudent.admissionYear;
	  this.courseName = arrStudent.courseName;
	};
	get course() {
	  return 2020 - this.admissionYear;
	};
 };
 
 class Students {
	constructor(arrStudent) {
	  this.students = arrStudent.map(
		 (item) =>
			new Student({
			  firstName: item.firstName,
			  lastName: item.lastName,
			  admissionYear: item.admissionYear,
			  courseName: item.courseName,
			})
	  );
	};
 };
 
 Students.prototype.getInfo = function () {
	this.students.sort((a, b) => a.course - b.course);
	this.students.map((item) =>
	  console.log(`${item.fullName} -  ${item.courseName}, ${item.course} курс `)
	);
 };
 
 const res = new Students(studentsData);
 console.log(res.getInfo());
 
// Lesson-7
const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1
    }
  }
};
const obj2 = {
  b: {
    c: {
      a: 1
    },
    b: 'b',
    a: 'a'
  },
  a: 'a'
};
const obj3 = {
  a: {
    c: {
      a: 'a'
    },
    b: 'b',
    a: 'a'
  },
  b: 'b'
};

function compareObj (Obj1, Obj2) {
  const checkObj = typeof Obj1 === 'object' && typeof Obj2 === 'object';// Проверка:является ли объектом.
  if (checkObj) {
    for (const prop in Obj1) {
      if (!Obj2.hasOwnProperty(prop)) return false; // Проверка по ключам.
      if (typeof Obj1[prop] === 'object' && typeof Obj2[prop] === 'object') { // Проерка на вложенность объектов
        const rez = compareObj(Obj1[prop], Obj2[prop]); // Запускаем функцияю для вложенных объектов, но уже с методами: "ключ:значение"
        if (!rez) return false; // Проверка на равенство
      } else if (Obj1[prop] !== Obj2[prop]) return false; // Проверка на примитив. За пределами вложенности.
    };
    return true; // Если все проверки пройдены: объект равен объекту
  };
};

console.log(compareObj(obj1, obj3));
console.log(compareObj(obj1, obj2));

// lesson-6
const palindrome = strPalindome => { return strPalindome.toUpperCase() === strPalindome.toUpperCase().split('').reverse().join(''); };// Два раза toUpperCase, но в одну строку)
console.log(palindrome('АННа'));

// Сопоставте страны с городами из массива:
const hotels = [
  {
	  name: 'Hotel Leopold',
	  city: 'Saint Petersburg',
	  country: 'Russia'
  },
  {
	  name: 'Apartment Sunshine',
	  city: 'Santa Cruz de Tenerife',
	  country: 'Spain'
  },
  {
	  name: 'Villa Kunerad',
	  city: 'Vysokie Tatry',
	  country: 'Slowakia'
  },
  {
	  name: 'Hostel Friendship',
	  city: 'Berlin',
	  country: 'Germany'
  },
  {
	  name: 'Radisson Blu Hotel',
	  city: 'Kyiv',
	  country: 'Ukraine'
  },
  {
	  name: 'Paradise Hotel',
	  city: 'Guadalupe',
	  country: 'Mexico'
  },
  {
	  name: 'Hotel Grindewald',
	  city: 'Interlaken',
	  country: 'Switzerland'
  },
  {
	  name: 'The Andaman Resort',
	  city: 'Port Dickson',
	  country: 'Malaysia'
  },
  {
	  name: 'Virgin Hotel',
	  city: 'Chicago',
	  country: 'USA'
  },
  {
	  name: 'Grand Beach Resort',
	  city: 'Dubai',
	  country: 'United Arab Emirates'
  },
  {
	  name: 'Shilla Stay',
	  city: 'Seoul',
	  country: 'South Korea'
  },
  {
	  name: 'San Firenze Suites',
	  city: 'Florence',
	  country: 'Italy'
  },
  {
	  name: 'The Andaman Resort',
	  city: 'Port Dickson',
	  country: 'Malaysia'
  },
  {
	  name: 'Black Penny Villas',
	  city: 'BTDC, Nuca Dua',
	  country: 'Indonesia'
  },
  {
	  name: 'Koko Hotel',
	  city: 'Tokyo',
	  country: 'Japan'
  },
  {
	  name: 'Ramada Plaza',
	  city: 'Istanbul',
	  country: 'Turkey'
  },
  {
	  name: 'Waikiki Resort Hotel',
	  city: 'Hawaii',
	  country: 'USA'
  },
  {
	  name: 'Puro Hotel',
	  city: 'Krakow',
	  country: 'Poland'
  },
  {
	  name: 'Asma Suites',
	  city: 'Santorini',
	  country: 'Greece'
  },
  {
	  name: 'Cityden Apartments',
	  city: 'Amsterdam',
	  country: 'Netherlands'
  },
  {
	  name: 'Mandarin Oriental',
	  city: 'Miami',
	  country: 'USA'
  },
  {
	  name: 'Concept Terrace Hotel',
	  city: 'Rome',
	  country: 'Italy'
  },
  {
	  name: 'Ponta Mar Hotel',
	  city: 'Fortaleza',
	  country: 'Brazil'
  },
  {
	  name: 'Four Seasons Hotel',
	  city: 'Sydney',
	  country: 'Australia'
  },
  {
	  name: 'Le Meridien',
	  city: 'Nice',
	  country: 'France'
  },
  {
	  name: 'Apart Neptun',
	  city: 'Gdansk',
	  country: 'Poland'
  },
  {
	  name: 'Lux Isla',
	  city: 'Ibiza',
	  country: 'Spain'
  },
  {
	  name: 'Nox Hostel',
	  city: 'London',
	  country: 'UK'
  },
  {
	  name: 'Leonardo Vienna',
	  city: 'Vienna',
	  country: 'Austria'
  },
  {
	  name: 'Adagio Aparthotel',
	  city: 'Edinburgh',
	  country: 'UK'
  },
  {
	  name: 'Steigenberger Hotel',
	  city: 'Hamburg',
	  country: 'Germany'
  }
];

// Поиск объектов размещения:
const hotels1 = [
  {
	  name: 'Hotel Leopold',
	  city: 'Saint Petersburg',
	  country: 'Russia'
  },
  {
	  name: 'Apartment Sunshine',
	  city: 'Santa Cruz de Tenerife',
	  country: 'Spain'
  },
  {
	  name: 'Villa Kunerad',
	  city: 'Vysokie Tatry',
	  country: 'Slowakia'
  },
  {
	  name: 'Hostel Friendship',
	  city: 'Berlin',
	  country: 'Germany'
  },
  {
	  name: 'Radisson Blu Hotel',
	  city: 'Kyiv',
	  country: 'Ukraine'
  },
  {
	  name: 'Paradise Hotel',
	  city: 'Guadalupe',
	  country: 'Mexico'
  },
  {
	  name: 'Hotel Grindewald',
	  city: 'Interlaken',
	  country: 'Switzerland'
  },
  {
	  name: 'The Andaman Resort',
	  city: 'Port Dickson',
	  country: 'Malaysia'
  },
  {
	  name: 'Virgin Hotel',
	  city: 'Chicago',
	  country: 'USA'
  },
  {
	  name: 'Grand Beach Resort',
	  city: 'Dubai',
	  country: 'United Arab Emirates'
  },
  {
	  name: 'Shilla Stay',
	  city: 'Seoul',
	  country: 'South Korea'
  },
  {
	  name: 'San Firenze Suites',
	  city: 'Florence',
	  country: 'Italy'
  },
  {
	  name: 'The Andaman Resort',
	  city: 'Port Dickson',
	  country: 'Malaysia'
  },
  {
	  name: 'Black Penny Villas',
	  city: 'BTDC, Nuca Dua',
	  country: 'Indonesia'
  },
  {
	  name: 'Koko Hotel',
	  city: 'Tokyo',
	  country: 'Japan'
  },
  {
	  name: 'Ramada Plaza',
	  city: 'Istanbul',
	  country: 'Turkey'
  },
  {
	  name: 'Waikiki Resort Hotel',
	  city: 'Hawaii',
	  country: 'USA'
  },
  {
	  name: 'Puro Hotel',
	  city: 'Krakow',
	  country: 'Poland'
  },
  {
	  name: 'Asma Suites',
	  city: 'Santorini',
	  country: 'Greece'
  },
  {
	  name: 'Cityden Apartments',
	  city: 'Amsterdam',
	  country: 'Netherlands'
  },
  {
	  name: 'Mandarin Oriental',
	  city: 'Miami',
	  country: 'USA'
  },
  {
	  name: 'Concept Terrace Hotel',
	  city: 'Rome',
	  country: 'Italy'
  },
  {
	  name: 'Ponta Mar Hotel',
	  city: 'Fortaleza',
	  country: 'Brazil'
  },
  {
	  name: 'Four Seasons Hotel',
	  city: 'Sydney',
	  country: 'Australia'
  },
  {
	  name: 'Le Meridien',
	  city: 'Nice',
	  country: 'France'
  },
  {
	  name: 'Apart Neptun',
	  city: 'Gdansk',
	  country: 'Poland'
  },
  {
	  name: 'Lux Isla',
	  city: 'Ibiza',
	  country: 'Spain'
  },
  {
	  name: 'Nox Hostel',
	  city: 'London',
	  country: 'UK'
  },
  {
	  name: 'Leonardo Vienna',
	  city: 'Vienna',
	  country: 'Austria'
  },
  {
	  name: 'Adagio Aparthotel',
	  city: 'Edinburgh',
	  country: 'UK'
  },
  {
	  name: 'Steigenberger Hotel',
	  city: 'Hamburg',
	  country: 'Germany'
  }
];

// Поиск объектов размещения:
function stringMatch (strArr, search) {
  search = prompt('sdsdsd').toUpperCase().trim();
	 return strArr.filter(item => Object.values(item).some(it => it.toUpperCase().trim().includes(search)));
}
console.log(stringMatch(hotels1));

// Сопоставте страны с городами из массива:
function filterCity (itemArr) {
  const valuesArr = Object.values(itemArr);
  const resultСheck = [];
  for (let i = 0; i < valuesArr.length; i++) {
    if (!resultСheck.includes(valuesArr[i].country)) {
      resultСheck.push(valuesArr[i].country);
    }// Первая часть функции: проверка на уникальность значений массива объектов по странам.
  }
  const rez = {};
  for (let h = 0; h < resultСheck.length; h++) {
    const filter = itemArr.filter(item => item.country === resultСheck[h]);
    rez[resultСheck[h]] = filter.map(item => item.city);
  }
	 return rez;
}
// Понимаю, что все максимально коряво, но эта хрень почему-то работает (можно больше методами заменить):)
console.log(filterCity(hotels));

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
