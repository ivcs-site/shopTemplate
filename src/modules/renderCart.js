const renderCart = (products) => {
    const cartWrapper = document.querySelector('.cart-modal__list')
    const cartModalNext = document.querySelector('.cart-modal__next')
    const cartModalForm = document.querySelector('.cart-modal__form')
    const cartModalList = document.querySelector('.cart-modal__list')

    cartWrapper.innerHTML = ''

    if(products.length === 0){
        cartWrapper.insertAdjacentHTML('beforeend', `
            <div class="cart-empty">
                Ваша корзина пустая
            </div>
        `)
        cartModalNext.classList.add('disabled')
        cartModalForm.classList.add('disabled')
        cartModalList.classList.remove('active')
    }else{
        cartModalForm.classList.remove('disabled')
        cartModalNext.classList.remove('disabled')
        products.forEach((productsItem) => {
            cartWrapper.insertAdjacentHTML('beforeend', `
            <div class="products-content__item products-content__item--scroll" data-key="${productsItem.id}">
                ${ productsItem.sale ? '<div class="products-content__item--sale"><span>Акция</span></div>' : ''}
                <img src="${productsItem.img}" alt="img" class="products-content__item--img">
                <h3 class="products-content__item--name">${productsItem.title}</h3>
                <div class="products-content__item--discount">
                    <span class="products-content__item--price">${productsItem.price} сум</span>
                    <span class="products-content__item--price--old">${productsItem.sale ? productsItem.count : ''}</span>
                </div>
                <button type="button" class="btn products-content__item--btn">Удалить</button>
            </div>
            `)
        })
    }
}

export default renderCart