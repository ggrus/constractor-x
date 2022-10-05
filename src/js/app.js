const hamburgerBtn = document.querySelector('.hamburger-btn')
const headerMenu = document.querySelector('.menu')

hamburgerBtn.onclick = () => {
  hamburgerBtn.classList.toggle('hamburger-btn--open')
  headerMenu.classList.toggle('menu--open')
  document.body.classList.toggle('_lock')
}

// Header
const headerElement = document.querySelector('.header');

const callback = function (entries, observer) {
  console.log(entries);
  if (entries[0].isIntersecting) {
    headerElement.classList.remove('scroll');
  } else {
    headerElement.classList.add('scroll');
  }
};

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);