import Swiper from 'swiper/bundle';
import ScrollReveal from "scrollreveal"
import filter from "./modules/filter"
import cart from "./modules/cart"
import load from './modules/load';
import search from './modules/search';
import catalog from './modules/catalog';

const swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

ScrollReveal().reveal('.navbar', {
    duration: 2000,
    origin: 'right',
    distance: '50px',
});

ScrollReveal().reveal('.header', {
    duration: 2000,
    origin: 'left',
    distance: '50px',
});

ScrollReveal().reveal('.category', {
    duration: 2000,
    origin: 'right',
    distance: '50px',
});

ScrollReveal().reveal('.products-content__title', {
    duration: 2000,
    origin: 'left',
    distance: '50px',
});

ScrollReveal().reveal('.products-content__wrapper', {
    duration: 2000,
    origin: 'right',
    distance: '50px',
});

ScrollReveal().reveal('.footer', {
    duration: 2000,
    origin: 'left',
    distance: '50px',
});

filter()
cart()
catalog()
load()
search()