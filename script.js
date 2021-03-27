const burgerBtn = document.querySelector('.navigation__burger');
const navigation = document.querySelector('.navigation');

function showMenu() {
  navigation.classList.toggle('show');
  burgerBtn.classList.toggle('show');
}

burgerBtn.addEventListener('click', showMenu);
