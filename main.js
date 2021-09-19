//Lesson-7
const obj1 = {
   a: 'a',
   b: {
     a: 'a',
     b: 'b',
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
     b: 'b',
     a: 'a',
   },
   a: 'a',
};
const obj3 = {
   a: {
     c: {
       a: 'a',
     },
     b: 'b',
     a: 'a',
   },
   b: 'b',
};

function compareObj (Obj1,Obj2){
	const checkObj = typeof Obj1 ==='object'&& typeof Obj2==='object';//Проверка:является ли объектом.
	if(checkObj){
		for(let prop in Obj1){
			if(!Obj2.hasOwnProperty(prop)) return false; //Проверка по ключам.
			if(typeof Obj1[prop]==='object'&&typeof Obj2[prop]==='object'){//Проерка на вложенность объектов
				const rez = compareObj(Obj1[prop], Obj2[prop]); // Запускаем функцияю для вложенных объектов, но уже с методами: "ключ:значение"
				if(!rez)return false;  //Проверка на равенство 
			}else if(Obj1[prop]!==Obj2[prop]) return false; //Проверка на примитив. За пределами вложенности.
		};
		return true // Если все проверки пройдены: объект равен объекту
	};
};

console.log(compareObj (obj1,obj3));
console.log(compareObj (obj1,obj2));

//lesson-6
const palindrome =strPalindome=>{return strPalindome.toUpperCase()===strPalindome.toUpperCase().split("").reverse().join("")}//Два раза toUpperCase, но в одну строку) 
console.log(palindrome("АННа"))

//Сопоставте страны с городами из массива: 
const hotels = [
	{
	  name: 'Hotel Leopold',
	  city: 'Saint Petersburg',
	  country: 'Russia',
	},
	{
	  name: 'Apartment Sunshine',
	  city: 'Santa Cruz de Tenerife',
	  country: 'Spain',
	},
	{
	  name: 'Villa Kunerad',
	  city: 'Vysokie Tatry',
	  country: 'Slowakia',
	},
	{
	  name: 'Hostel Friendship',
	  city: 'Berlin',
	  country: 'Germany',
	},
	{
	  name: 'Radisson Blu Hotel',
	  city: 'Kyiv',
	  country: 'Ukraine',
	},
	{
	  name: 'Paradise Hotel',
	  city: 'Guadalupe',
	  country: 'Mexico',
	},
	{
	  name: 'Hotel Grindewald',
	  city: 'Interlaken',
	  country: 'Switzerland',
	},
	{
	  name: 'The Andaman Resort',
	  city: 'Port Dickson',
	  country: 'Malaysia',
	},
	{
	  name: 'Virgin Hotel',
	  city: 'Chicago',
	  country: 'USA',
	},
	{
	  name: 'Grand Beach Resort',
	  city: 'Dubai',
	  country: 'United Arab Emirates',
	},
	{
	  name: 'Shilla Stay',
	  city: 'Seoul',
	  country: 'South Korea',
	},
	{
	  name: 'San Firenze Suites',
	  city: 'Florence',
	  country: 'Italy',
	},
	{
	  name: 'The Andaman Resort',
	  city: 'Port Dickson',
	  country: 'Malaysia',
	},
	{
	  name: 'Black Penny Villas',
	  city: 'BTDC, Nuca Dua',
	  country: 'Indonesia',
	},
	{
	  name: 'Koko Hotel',
	  city: 'Tokyo',
	  country: 'Japan',
	},
	{
	  name: 'Ramada Plaza',
	  city: 'Istanbul',
	  country: 'Turkey',
	},
	{
	  name: 'Waikiki Resort Hotel',
	  city: 'Hawaii',
	  country: 'USA',
	},
	{
	  name: 'Puro Hotel',
	  city: 'Krakow',
	  country: 'Poland',
	},
	{
	  name: 'Asma Suites',
	  city: 'Santorini',
	  country: 'Greece',
	},
	{
	  name: 'Cityden Apartments',
	  city: 'Amsterdam',
	  country: 'Netherlands',
	},
	{
	  name: 'Mandarin Oriental',
	  city: 'Miami',
	  country: 'USA',
	},
	{
	  name: 'Concept Terrace Hotel',
	  city: 'Rome',
	  country: 'Italy',
	},
	{
	  name: 'Ponta Mar Hotel',
	  city: 'Fortaleza',
	  country: 'Brazil',
	},
	{
	  name: 'Four Seasons Hotel',
	  city: 'Sydney',
	  country: 'Australia',
	},
	{
	  name: 'Le Meridien',
	  city: 'Nice',
	  country: 'France',
	},
	{
	  name: 'Apart Neptun',
	  city: 'Gdansk',
	  country: 'Poland',
	},
	{
	  name: 'Lux Isla',
	  city: 'Ibiza',
	  country: 'Spain',
	},
	{
	  name: 'Nox Hostel',
	  city: 'London',
	  country: 'UK',
	},
	{
	  name: 'Leonardo Vienna',
	  city: 'Vienna',
	  country: 'Austria',
	},
	{
	  name: 'Adagio Aparthotel',
	  city: 'Edinburgh',
	  country: 'UK',
	},
	{
	  name: 'Steigenberger Hotel',
	  city: 'Hamburg',
	  country: 'Germany',
	},
 ];



//////////////////////////////////////////////
//Поиск объектов размещения: 
const hotels1 = [
	{
	  name: 'Hotel Leopold',
	  city: 'Saint Petersburg',
	  country: 'Russia',
	},
	{
	  name: 'Apartment Sunshine',
	  city: 'Santa Cruz de Tenerife',
	  country: 'Spain',
	},
	{
	  name: 'Villa Kunerad',
	  city: 'Vysokie Tatry',
	  country: 'Slowakia',
	},
	{
	  name: 'Hostel Friendship',
	  city: 'Berlin',
	  country: 'Germany',
	},
	{
	  name: 'Radisson Blu Hotel',
	  city: 'Kyiv',
	  country: 'Ukraine',
	},
	{
	  name: 'Paradise Hotel',
	  city: 'Guadalupe',
	  country: 'Mexico',
	},
	{
	  name: 'Hotel Grindewald',
	  city: 'Interlaken',
	  country: 'Switzerland',
	},
	{
	  name: 'The Andaman Resort',
	  city: 'Port Dickson',
	  country: 'Malaysia',
	},
	{
	  name: 'Virgin Hotel',
	  city: 'Chicago',
	  country: 'USA',
	},
	{
	  name: 'Grand Beach Resort',
	  city: 'Dubai',
	  country: 'United Arab Emirates',
	},
	{
	  name: 'Shilla Stay',
	  city: 'Seoul',
	  country: 'South Korea',
	},
	{
	  name: 'San Firenze Suites',
	  city: 'Florence',
	  country: 'Italy',
	},
	{
	  name: 'The Andaman Resort',
	  city: 'Port Dickson',
	  country: 'Malaysia',
	},
	{
	  name: 'Black Penny Villas',
	  city: 'BTDC, Nuca Dua',
	  country: 'Indonesia',
	},
	{
	  name: 'Koko Hotel',
	  city: 'Tokyo',
	  country: 'Japan',
	},
	{
	  name: 'Ramada Plaza',
	  city: 'Istanbul',
	  country: 'Turkey',
	},
	{
	  name: 'Waikiki Resort Hotel',
	  city: 'Hawaii',
	  country: 'USA',
	},
	{
	  name: 'Puro Hotel',
	  city: 'Krakow',
	  country: 'Poland',
	},
	{
	  name: 'Asma Suites',
	  city: 'Santorini',
	  country: 'Greece',
	},
	{
	  name: 'Cityden Apartments',
	  city: 'Amsterdam',
	  country: 'Netherlands',
	},
	{
	  name: 'Mandarin Oriental',
	  city: 'Miami',
	  country: 'USA',
	},
	{
	  name: 'Concept Terrace Hotel',
	  city: 'Rome',
	  country: 'Italy',
	},
	{
	  name: 'Ponta Mar Hotel',
	  city: 'Fortaleza',
	  country: 'Brazil',
	},
	{
	  name: 'Four Seasons Hotel',
	  city: 'Sydney',
	  country: 'Australia',
	},
	{
	  name: 'Le Meridien',
	  city: 'Nice',
	  country: 'France',
	},
	{
	  name: 'Apart Neptun',
	  city: 'Gdansk',
	  country: 'Poland',
	},
	{
	  name: 'Lux Isla',
	  city: 'Ibiza',
	  country: 'Spain',
	},
	{
	  name: 'Nox Hostel',
	  city: 'London',
	  country: 'UK',
	},
	{
	  name: 'Leonardo Vienna',
	  city: 'Vienna',
	  country: 'Austria',
	},
	{
	  name: 'Adagio Aparthotel',
	  city: 'Edinburgh',
	  country: 'UK',
	},
	{
	  name: 'Steigenberger Hotel',
	  city: 'Hamburg',
	  country: 'Germany',
	},
 ];

//Поиск объектов размещения:
function stringMatch(strArr, search){
	search = prompt ("sdsdsd").toUpperCase().trim();
	 return strArr.filter(item=> Object.values(item).some(it =>it.toUpperCase().trim().includes(search)));
	 
}
console.log(stringMatch (hotels1));

//Сопоставте страны с городами из массива: 
function filterCity (itemArr){
	let valuesArr  = Object.values(itemArr);
	let resultСheck = []; 
	for( let i =0;i<valuesArr.length;i++){
		if(!resultСheck.includes(valuesArr[i].country)){
			resultСheck.push(valuesArr[i].country);	
		}//Первая часть функции: проверка на уникальность значений массива объектов по странам.
	}
	let rez = {};
	for(let h=0;h<resultСheck.length;h++){
		const filter=itemArr.filter(item=>item.country===resultСheck[h]);
		rez[resultСheck[h]] = filter.map(item=>item.city);
	}
	 return rez;
}
//Понимаю, что все максимально коряво, но эта хрень почему-то работает (можно больше методами заменить):)
console.log(filterCity(hotels));
