const filter = () => {
    let filter = document.querySelector('.navbar-nav__filter')
    let filterWrapper = document.querySelector('.navbar-nav__filter--wrapper')
    let filterLabel = document.querySelector('.navbar-nav__filter--list--label')
    let filterCheckbox = document.querySelector('.navbar-nav__filter--list--discount')
    let filterChecked = document.querySelector('.navbar-nav__filter--list--checked')

    filterWrapper.addEventListener('click', () => {
        filter.classList.toggle('active')
    })

    filterLabel.addEventListener('click', () => {
        if (filterCheckbox.checked) {
            filterChecked.style.display = 'none'
        } else {
            filterChecked.style.display = 'block'
        }
    })
}

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

ScrollReveal().reveal('.navbar', {
    duration: 2000,
    origin: 'top',
    distance: '200px',
});

ScrollReveal().reveal('.header', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
});

ScrollReveal().reveal('.category', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px',
});

ScrollReveal().reveal('.products-content__item', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px',
});

ScrollReveal().reveal('.footer', {
    duration: 2000,
    origin: 'left',
    distance: '200px',
});

filter()