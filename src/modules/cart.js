const cart = () => {
    let cartBtn = document.querySelector('.navbar-nav__cart')
    let cartModal = document.querySelector('.cart-modal')
    let cartModalClose = document.querySelector('.cart-modal__close')
    let cartModalBtnClose = document.querySelector('.cart-modal__btn--close')
    let cartModalNext = document.querySelector('.cart-modal__next')
    let cartModalForm = document.querySelector('.cart-modal__form')

    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'flex'
        document.body.style = 'overflow: hidden;'
    })

    cartModalClose.addEventListener('click', () => {
        cartModal.style.display = 'none'
        document.body.style = ''

        cartModalForm.classList.remove('active')
        cartModalForm.style.display = 'none'
        cartModalNext.innerHTML = 'Оформить заказ'
    })
    
    cartModalBtnClose.addEventListener('click', () => {
        cartModal.style.display = 'none'
        document.body.style = ''

        cartModalForm.classList.remove('active')
        cartModalForm.style.display = 'none'
        cartModalNext.innerHTML = 'Оформить заказ'
    })

    cartModalNext.addEventListener('click', () => {
        if (cartModalForm.classList.contains('active')) {
            cartModalForm.classList.remove('active')
            cartModalForm.style.display = 'none'
            cartModalNext.innerHTML = 'Оформить заказ'
        } else {
            cartModalForm.classList.add('active')
            cartModalForm.style.display = 'flex'
            cartModalNext.innerHTML = 'Назад'
        }
    })
}

export default cart