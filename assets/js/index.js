const filter = () => {
    let filter = document.querySelector('.navbar-nav__filter')
    let filterWrapper = document.querySelector('.navbar-nav__filter--wrapper')

    filterWrapper.addEventListener('click', () => {
        filter.classList.toggle('active')
    })
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

filter()