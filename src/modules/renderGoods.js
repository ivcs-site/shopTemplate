const renderGoods = (products) => {
    const productsWrapper = document.querySelector('.products-content__wrapper')

    localStorage.setItem('products', JSON.stringify(products))

    productsWrapper.innerHTML = ''

    products.forEach((productsItem) => {
        productsWrapper.insertAdjacentHTML('beforeend', `
        <div class="products-content__item products-content__item--scroll" data-key="${productsItem.id}">
            ${productsItem.sale ? '<div class="products-content__item--sale"><span>Акция</span></div>' : ''}
            <img src="${productsItem.img}" alt="img" class="products-content__item--img">
            <h3 class="products-content__item--name">${productsItem.title}</h3>
            <div class="products-content__item--discount">
                <span class="products-content__item--price">${productsItem.price} сум</span>
                <span class="products-content__item--price--old">${productsItem.sale ? productsItem.count : ''}</span>
            </div>
            <button type="button" class="btn products-content__item--btn">В корзину</button>
        </div>
        `)
    })
}

export default renderGoods