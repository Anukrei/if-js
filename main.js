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
  const checkObj = typeof Obj1 === "object" && typeof Obj2 === "object"; // Проверка:является ли объектом.
  if (checkObj) {
    for (const prop in Obj1) {
      if (!Obj2.hasOwnProperty(prop)) {
        return false; // Проверка по ключам.
      }
      if (typeof Obj1[prop] === "object" && typeof Obj2[prop] === "object") {
        // Проерка на вложенность объектов
        const rez = compareObj(Obj1[prop], Obj2[prop]); // Запускаем функцияю для вложенных объектов, но уже с методами: "ключ:значение"
        if (!rez) {
          return false; // Проверка на равенство
        }
      } else if (Obj1[prop] !== Obj2[prop]) {
        return false; // Проверка на примитив. За пределами вложенности.
      }
    }
    return true; // Если все проверки пройдены: объект равен объекту
  }
}

console.log(compareObj(obj1, obj3));
console.log(compareObj(obj1, obj2));
