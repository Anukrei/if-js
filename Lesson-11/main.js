const plusChildren = document.getElementById("plus-children");
const minusChildren = document.getElementById("minus-children");
const counterChildren = document.getElementById("counterChildren");

const plusAdults = document.getElementById("plus-adults");
const minusAdults = document.getElementById("minus-adults");
const counterAdult = document.getElementById("counterAdult");

const placeholderChildren = document.getElementById("placeholderChildren");
const placeholderRoom = document.getElementById("placeholderRoom");

const plusRooms = document.getElementById("plus-rooms");
const RoomsMinus = document.getElementById("RoomsMinus");
const counterRooms = document.getElementById("counterRooms");

const copySelect = document.getElementById("copySelect");
const filter = document.getElementById("age_select");
const filterForm = document.getElementById("filterForm");

const adultsButton = document.getElementById("adultsButton");
const childrenButton = document.getElementById("childrenButton");
const roomButton = document.getElementById("roomButton");

plusAdults.addEventListener("click", () => {
  counterAdult.innerHTML++ === 30
    ? (counterAdult.innerHTML = 30)
    : counterAdult.innerHTML;
});

plusAdults.addEventListener("click", () => {
  placeholderCounter.innerHTML++ === 30
    ? (placeholderCounter.innerHTML = 30)
    : placeholderCounter.innerHTML;
});

minusAdults.addEventListener("click", () => {
  placeholderCounter.innerHTML-- === 0
    ? (placeholderCounter.innerHTML = 0)
    : placeholderCounter.innerHTML;
});

minusAdults.addEventListener("click", () => {
  counterAdult.innerHTML-- === 0
    ? (counterAdult.innerHTML = 0)
    : counterAdult.innerHTML;
});

//2
plusChildren.addEventListener("click", () => {
  counterChildren.innerHTML++ === 10
    ? (counterChildren.innerHTML = 10)
    : counterChildren.innerHTML;

  filter.style.display = filter.style.display === "block" ? "block" : "block";

  let p_prime = copySelect.cloneNode;

  counterChildren.innerHTML < 0
    ? (p_prime = copySelect.cloneNode(false))
    : (p_prime = copySelect.cloneNode(true));

  if (counterChildren.innerHTML == 10) {
    p_prime = copySelect;
  }

  filterForm.appendChild(p_prime);
});

plusChildren.addEventListener("click", () => {
  placeholderChildren.innerHTML++ === 10
    ? (placeholderChildren.innerHTML = 10)
    : placeholderChildren.innerHTML;
});

minusChildren.addEventListener("click", () => {
  placeholderChildren.innerHTML-- == 0
    ? (placeholderChildren.innerHTML = 0)
    : placeholderChildren.innerHTML;
});

let fil = document.getElementById("pro1");

minusChildren.addEventListener("click", () => {
  counterChildren.innerHTML-- == 0
    ? (counterChildren.innerHTML = 0)
    : counterChildren.innerHTML;
  if (counterChildren.innerHTML == 0) {
    filter.style.display = filter.style.display === "block" ? "none" : "none";
  }
});

//2

function remove() {
  $("#copySelect").remove();
}

remove();

//3
plusRooms.addEventListener("click", () => {
  counterRooms.innerHTML++ === 15
    ? (counterRooms.innerHTML = 15)
    : counterRooms.innerHTML;
});
plusRooms.addEventListener("click", () => {
  placeholderRoom.innerHTML++ === 15
    ? (placeholderRoom.innerHTML = 15)
    : placeholderRoom.innerHTML;
});

RoomsMinus.addEventListener("click", () => {
  counterRooms.innerHTML-- === 0
    ? (counterRooms.innerHTML = 0)
    : counterRooms.innerHTML;
});
RoomsMinus.addEventListener("click", () => {
  placeholderRoom.innerHTML-- === 0
    ? (placeholderRoom.innerHTML = 0)
    : placeholderRoom.innerHTML;
});
//3

adultsButton.addEventListener("click", () => {
  filterForm.style.display =
    filterForm.style.display === "none" ? "block" : "none";
});
childrenButton.addEventListener("click", () => {
  filterForm.style.display =
    filterForm.style.display === "none" ? "block" : "none";
});
roomButton.addEventListener("click", () => {
  filterForm.style.display =
    filterForm.style.display === "none" ? "block" : "none";
});














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
	 	<img class="hotel11" src="${itemArr.imageUrl}" alt="${itemArr.name}">
		 <div class="name_hotel">${itemArr.name}</div>
		 <div>${itemArr.city}, ${itemArr.country}</div>`;
    homes.append(hotels);
  }

  $(document).ready(function () {
    $(homes).slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      arrows: true,
    });
  });
}

document.addEventListener("DOMContentLoaded", async function () {
   homes = await eventSearch();
});

async function eventSearch() {
  const searchResults = sessionStorage.getItem(homes);
  if (searchResults) {
	const found = JSON.parse();
	htmlItem(found);
	
  } else {
	const respRemote  = await fetch(
      "https://fe-student-api.herokuapp.com/api/hotels/popular"
    );
    const dataJson = await respRemote.json();
    htmlItem(dataJson);
	
  }
}

