/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-tabs */
//all = !!! "=="
const plusChildren = document.getElementById('plus-children');
const minusChildren = document.getElementById('minus-children');
const counterChildren = document.getElementById('counterChildren');

const plusAdults = document.getElementById('plus-adults');
const minusAdults = document.getElementById('minus-adults');
const counterAdult = document.getElementById('counterAdult');

const placeholderChildren = document.getElementById('placeholderChildren');
const placeholderRoom = document.getElementById('placeholderRoom');

const plusRooms = document.getElementById('plus-rooms');
const RoomsMinus = document.getElementById('RoomsMinus');
const counterRooms = document.getElementById('counterRooms');

const copySelect = document.getElementById('copySelect');
const filter = document.getElementById('age_select');
const filterForm = document.getElementById('filterForm');

const adultsButton = document.getElementById('adultsButton');
const childrenButton = document.getElementById('childrenButton');
const roomButton = document.getElementById('roomButton');

plusAdults.addEventListener('click', () => {
  counterAdult.innerHTML++ == 30
    ? (counterAdult.innerHTML = 30)
    : counterAdult.innerHTML;
});

plusAdults.addEventListener('click', () => {
  placeholderCounter.innerHTML++ == 30
    ? (placeholderCounter.innerHTML = 30)
    : placeholderCounter.innerHTML;
});

minusAdults.addEventListener('click', () => {
  placeholderCounter.innerHTML-- == 0
    ? (placeholderCounter.innerHTML = 0)
    : placeholderCounter.innerHTML;
});

minusAdults.addEventListener('click', () => {
  counterAdult.innerHTML-- == 0
    ? (counterAdult.innerHTML = 0)
    : counterAdult.innerHTML;
});

// 2
plusChildren.addEventListener('click', () => {
  counterChildren.innerHTML++ == 10
    ? (counterChildren.innerHTML = 10)
    : counterChildren.innerHTML;

  filter.style.display = filter.style.display === 'block' ? 'block' : 'block';

  let clone = copySelect.cloneNode;

  counterChildren.innerHTML < 0
    ? (clone = copySelect.cloneNode(false))
    : (clone = copySelect.cloneNode(true));

  if (counterChildren.innerHTML == 10) {
    clone = copySelect;
  }

  filterForm.appendChild(clone);
});

plusChildren.addEventListener('click', () => {
  placeholderChildren.innerHTML++ == 10
    ? (placeholderChildren.innerHTML = 10)
    : placeholderChildren.innerHTML;
});

minusChildren.addEventListener('click', () => {
  placeholderChildren.innerHTML-- == 0
    ? (placeholderChildren.innerHTML = 0)
    : placeholderChildren.innerHTML;
});



minusChildren.addEventListener('click', () => {
  counterChildren.innerHTML-- == 0
    ? (counterChildren.innerHTML = 0)
    : counterChildren.innerHTML;
  if (counterChildren.innerHTML == 0) {
    filter.style.display = filter.style.display === 'block' ? 'none' : 'none';
  }//==!!
});

// 2

function remove () {
  $('#copySelect').remove();
}

remove();

// 3
plusRooms.addEventListener('click', () => {
  counterRooms.innerHTML++ == 15
    ? (counterRooms.innerHTML = 15)
    : counterRooms.innerHTML;
});
plusRooms.addEventListener('click', () => {
  placeholderRoom.innerHTML++ == 15
    ? (placeholderRoom.innerHTML = 15)
    : placeholderRoom.innerHTML;
});

RoomsMinus.addEventListener('click', () => {
  counterRooms.innerHTML-- == 0
    ? (counterRooms.innerHTML = 0)
    : counterRooms.innerHTML;
});
RoomsMinus.addEventListener('click', () => {
  placeholderRoom.innerHTML-- == 0
    ? (placeholderRoom.innerHTML = 0)
    : placeholderRoom.innerHTML;
});
// 3



adultsButton.addEventListener('click', () => {
  filterForm.style.display =
    filterForm.style.display === 'none' ? 'block' : 'none';
});
childrenButton.addEventListener('click', () => {
  filterForm.style.display =
    filterForm.style.display === 'none' ? 'block' : 'none';
});
roomButton.addEventListener('click', () => {
  filterForm.style.display =
    filterForm.style.display === 'none' ? 'block' : 'none';
});

