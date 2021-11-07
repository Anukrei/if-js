
// Lesson-7
const obj1 = {
  a: "a",
  b: {
    a: "a",
    b: "b",
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: "b",
    a: "a",
  },
  a: "a",
};
const obj3 = {
  a: {
    c: {
      a: "a",
    },
    b: "b",
    a: "a",
  },
  b: "b",
};

function compareObj(Obj1, Obj2) {
  const checkObj = typeof Obj1 === "object" && typeof Obj2 === "object"; 
  if (checkObj) {
    for (const prop in Obj1) {

      if (!Obj2.hasOwnProperty(prop)) return false; 
=======
      if (!Obj2.hasOwnProperty(prop)) {
        return false; // Проверка по ключам.
      }

      if (typeof Obj1[prop] === "object" && typeof Obj2[prop] === "object") {
        
        const rez = compareObj(Obj1[prop], Obj2[prop]); // Запускаем функцияю для вложенных объектов, но уже с методами: "ключ:значение"
        if (!rez) {
          return false; // Проверка на равенство
        }
      } else if (Obj1[prop] !== Obj2[prop]) {
        return false; // Проверка на примитив. За пределами вложенности.
      }
    }
    return true; 
  }
}

console.log(compareObj(obj1, obj3));
console.log(compareObj(obj1, obj2));


// lesson-6
const palindrome = (strPalindome) => {
  return (
    strPalindome.toUpperCase() ===
    strPalindome.toUpperCase().split("").reverse().join("")
  );
};
console.log(palindrome("АННа"));

/
const hotels = [
=======
=======
//lesson-5
//Преобразование формата даты:
const date = "2020-11-26";
const DateStr = (str) => {
  return str.split("-").reverse().join(".");
};
console.log(DateStr(date));
//Поиск объектов размещения:
const data = [

  {
    country: "Russia",
    city: "Saint Petersburg",
    hotel: "Hotel Leopold",
  },
  {
    country: "Spain",
    city: "Santa Cruz de Tenerife",
    hotel: "Apartment Sunshine",
  },
  {
    country: "Slowakia",
    city: "Vysokie Tatry",
    hotel: "Villa Kunerad",
  },
  {
    country: "Germany",
    city: "Berlin",
    hotel: "Hostel Friendship",
  },
  {
    country: "Indonesia",
    city: "Bali",
    hotel: "Ubud Bali Resort&SPA",
  },
  {
    country: "Netherlands",
    city: "Rotterdam",
    hotel: "King Kong Hostel",
  },
  {
    country: "Marocco",
    city: "Ourika",
    hotel: "Rokoko Hotel",
  },
  {
    country: "Germany",
    city: "Berlin",
    hotel: "Hotel Rehberge Berlin Mitte",
  },
];

function search(strArr, input) {
  const sum = [];
  input = prompt("Input");
  for (let i = 0; i < strArr.length; i++) {
    const current =
      `${strArr[i].country} ${strArr[i].city} ${strArr[i].hotel}`.toLowerCase();
    if (current.includes(input)) {
      sum.push(strArr[i]);
    }
  };
  return sum;
};
console.log(search(data)); //наверное так делать нельзя, но в целях разносторонниму мышлению)git




