const cart = () => {
    let cartBtn = document.querySelector('.navbar-nav__cart')
    let cartModal = document.querySelector('.cart-modal')
    let cartModalClose = document.querySelector('.cart-modal__close')
    let cartModalBtnClose = document.querySelector('.cart-modal__btn--close')
    let cartModalNext = document.querySelector('.cart-modal__next')
    let cartModalForm = document.querySelector('.cart-modal__form')
    let cartModalList = document.querySelector('.cart-modal__list')

    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'flex'
        document.body.style = 'overflow: hidden;'

        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

        // renderCart(cart)

        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    })

    cartModalClose.addEventListener('click', () => {
        cartModal.style.display = 'none'
        document.body.style = ''

        cartModalForm.classList.remove('active')
        cartModalForm.style.display = 'none'
        cartModalNext.innerHTML = 'Оформить заказ'

        cartModalList.classList.remove('active')
    })
    
    cartModalBtnClose.addEventListener('click', () => {
        cartModal.style.display = 'none'
        document.body.style = ''

        cartModalForm.classList.remove('active')
        cartModalForm.style.display = 'none'
        cartModalNext.innerHTML = 'Оформить заказ'

        cartModalList.classList.remove('active')
    })

    cartModalNext.addEventListener('click', () => {
        if (cartModalForm.classList.contains('active')) {
            cartModalForm.classList.remove('active')
            cartModalForm.style.display = 'none'
            cartModalNext.innerHTML = 'Оформить заказ'
            cartModalList.classList.remove('active')
        } else {
            cartModalForm.classList.add('active')
            cartModalForm.style.display = 'flex'
            cartModalNext.innerHTML = 'Назад'
            cartModalList.classList.add('active')
        }
    })
}

export default cart