$(document).on("ready", function () {
  $(homes).slick({
    slidesToShow: 4,
    slidesToScroll: 5,
  });
});

const data = [
  {
    name: "Hotel Leopold",
    city: "Saint Petersburg",
    country: "Russia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg",
  },
  {
    name: "Apartment Sunshine",
    city: "Santa Cruz de Tenerife",
    country: "Spain",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg",
  },
  {
    name: "Villa Kunerad",
    city: "Vysokie Tatry",
    country: "Slowakia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg",
  },
  {
    name: "Hostel Friendship",
    city: "Berlin",
    country: "Germany",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg",
  },
  {
    name: "Radisson Blu Hotel",
    city: "Kyiv",
    country: "Ukraine",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg",
  },
  {
    name: "Paradise Hotel",
    city: "Guadalupe",
    country: "Mexico",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg",
  },
  {
    name: "Hotel Grindewald",
    city: "Interlaken",
    country: "Switzerland",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
    imageUrl:
      "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg",
  },
];

let homes = document.createElement("div");
const homesl = document.createElement("section");
homesl.innerHTML = `<p>Homes guests loves</p>`;
homesl.style.cssText = `
 text-align: center;
		font-size: 40px;
		font-weight: 500;
		padding:  1% 0 3% 0;
		background-color: #EAF0F9;
		max-width: 1440px;
		margin: 0 auto;
		font-family: Roboto;
`;
//Так делать наверняка нельзя, но хотелось по максимум сделать все через js, включая стили.
homes.append(homesl);
document.body.append(homesl);

homes.style.cssText = `
		 max-width: 1440px;
		 margin: 0 auto;
		 box-sizing: border-box;
		 background-color: #EAF0F9;
		 padding: 50px 6%;
		 font-family: Roboto;
		 font-size: 22px;
		 color:rgba(79, 91, 255, 0.548);
	`;
document.body.append(homes);
function htmlItem(arr) {
  let itemArr;
  for (let i = 0; i < arr.length; i++) {
    itemArr = arr[i];
    hotels = document.createElement("div");
    hotels.innerHTML = `
	 	<img src="${itemArr.imageUrl}" alt="${itemArr.name}">
		 <div class="name_hotel">${itemArr.name}</div>
		 <div>${itemArr.city}, ${itemArr.country}</div>`;
    homes.append(hotels);
  };
};
htmlItem(data);
