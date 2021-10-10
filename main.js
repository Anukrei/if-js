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


