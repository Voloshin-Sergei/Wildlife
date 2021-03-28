const burgerBtn = document.querySelector('.navigation__burger');
const navigation = document.querySelector('.navigation');
const prevBtn = document.querySelector('.slider__button_prev');
const nextBtn = document.querySelector('.slider__button_next');
const slideItem = document.querySelectorAll('.slider__item');

const sliderData = [
  {
    image: 'assets/item1',
    title: 'Deer',
    description: 'Naturalist investigation',
  },
  {
    image: 'assets/item2',
    title: 'Squirrel',
    description: 'Kamikaze squirrels',
  },
  {
    image: 'assets/item3',
    title: 'Bird',
    description: 'Birds Fight club',
  },
  {
    image: 'assets/item4',
    title: 'Ladybug',
    description: 'Holy bug',
  },
  {
    image: 'assets/item5',
    title: 'Chipmunk',
    description: 'Rescue Ranger',
  },
  {
    image: 'assets/item6',
    title: 'Wolf',
    description: 'Forest orderly',
  },
];

let count = 0;

function showMenu() {
  navigation.classList.toggle('show');
  burgerBtn.classList.toggle('show');
}

function prev() {
  count += 1;
  if (count > 5) {
    count = 0;
  }
  slideShow();
}
function next() {
  count -= 1;
  if (count < 0) {
    count = 5;
  }
  slideShow();
}

function slideShow() {
  slideItem[0].innerHTML = `<img class="slider__item__image" src="${sliderData[count].image}.jpg"/>
  <h4 class="slider__item__title">${sliderData[count].title}</h4>
  <small class="slider__item__description">${sliderData[count].description}</small>
  `;
  slideItem[1].innerHTML = `<img class="slider__item__image" src="${
    sliderData[count + (count === 5 ? -5 : 1)].image
  }.jpg"/>
  <h4 class="slider__item__title">${sliderData[count + (count === 5 ? -5 : 1)].title}</h4>
  <small class="slider__item__description">${
    sliderData[count + (count === 5 ? -5 : 1)].description
  }</small>
  `;
  slideItem[2].innerHTML = `<img class="slider__item__image" src="${
    sliderData[count + (count === 5 || count === 4 ? -4 : 2)].image
  }.jpg"/>
  <h4 class="slider__item__title">${
    sliderData[count + (count === 5 || count === 4 ? -4 : 2)].title
  }</h4>
  <small class="slider__item__description">${
    sliderData[count + (count === 5 || count === 4 ? -4 : 2)].description
  }</small>
`;
}

burgerBtn.addEventListener('click', showMenu);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
