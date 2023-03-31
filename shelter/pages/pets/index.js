//Burger menu

const burgerMenu = document.querySelector('.menu__burger');
const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__list-link');
const overlay = document.querySelector('.menu__burger-overlay');

function toggleBurger() {
    if (burgerMenu.classList.contains('open')) {
        document.body.classList.remove('noscroll');
        burgerMenu.classList.remove('open');
        navMenu.classList.remove('open');
        overlay.style.display = 'none';
    } else {
        document.body.classList.toggle('noscroll');
        burgerMenu.classList.toggle('open');
        navMenu.classList.toggle('open');
        overlay.style.display = 'block';
    }
}

burgerMenu.addEventListener('click', toggleBurger);
overlay.addEventListener('click', toggleBurger);
navLinks.forEach(navLink => navLink.addEventListener('click', toggleBurger));
