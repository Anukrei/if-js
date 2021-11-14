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
   homes = await eventSearch(homes);
});

async function eventSearch() {
  const searchResults = sessionStorage.getItem("homes");
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


