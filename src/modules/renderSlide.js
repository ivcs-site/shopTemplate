const renderSlide = (slide) => {
    const slideWrapper = document.querySelector('.swiper-wrapper')

    // localStorage.setItem('products', JSON.stringify(products))

    // productsWrapper.innerHTML = ''

    slide.forEach((slideItem) => {
        slideWrapper.insertAdjacentHTML('beforeend', `
            <div class="swiper-slide header-slider__item">
                <img src="${slideItem.img}" alt="img" class="header-content__img">
                <div class="header-slider__item--wrapper">
                    <h2>${slideItem.title}</h2>
                    <a href="#products" class="btn">Подробнее</a>
                </div>
            </div>
        `)
    })
}

export default renderSlide