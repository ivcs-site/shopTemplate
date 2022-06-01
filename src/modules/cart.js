import renderCart from "./renderCart"
import postData from "./postData"

const cart = () => {
    const send_form = document.getElementById('my_form');
    let cartBtn = document.querySelector('.navbar-nav__cart')
    let cartModal = document.querySelector('.cart-modal')
    let cartModalClose = document.querySelector('.cart-modal__close')
    let cartModalBtnClose = document.querySelector('.cart-modal__btn--close')
    let cartModalNext = document.querySelector('.cart-modal__next')
    let cartModalForm = document.querySelector('.cart-modal__form')
    let cartSend = cartModalForm.querySelector('.cart-modal__form--send')
    let cartModalList = document.querySelector('.cart-modal__list')
    let cartTotal = document.getElementById('cartSpan')
    let productsWrapper = document.querySelector('.products-content__wrapper')

    // console.log(cartTotal);

    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'flex'
        document.body.style = 'overflow: hidden;'

        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        renderCart(cart)

        cartTotal.textContent = cart.reduce((sum, productsItem) => {
            return sum + productsItem.price
        }, 0)
    })

    cartModalClose.addEventListener('click', () => {
        cartModal.style.display = 'none'
        document.body.style = ''
        cartModalForm.classList.remove('active')
        cartModalForm.style.display = 'none'
        cartModalNext.innerHTML = 'Оформить заказ'
        cartModalList.classList.remove('active')
        cartModalNext.classList.add('disabled')
    })

    cartModalBtnClose.addEventListener('click', () => {
        cartModal.style.display = 'none'
        document.body.style = ''
        cartModalForm.classList.remove('active')
        cartModalForm.style.display = 'none'
        cartModalNext.innerHTML = 'Оформить заказ'
        cartModalList.classList.remove('active')
        cartModalNext.classList.add('disabled')
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

    productsWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('products-content__item--btn')) {
            const card = event.target.closest('.products-content__item')
            const key = card.dataset.key
            const products = JSON.parse(localStorage.getItem('products'))
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const productsItem = products.find((item) => {
                return item.id === +key
            })
            cart.push(productsItem)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    })
    cartModalList.addEventListener('click', (event) => {
        if (event.target.classList.contains('products-content__item--btn')) {
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const card = event.target.closest('.products-content__item')
            const key = card.dataset.key
            const index = cart.findIndex((item) => {
                return item.id === +key
            })

            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart))

            renderCart(cart)

            cartTotal.textContent = cart.reduce((sum, productsItem) => {
                return sum + productsItem.price
            }, 0)
        }
    })

    // function sendMail(cart) {
    //     const mailSubject = "Новый Заказ из Интернет Магазина"
    //     const mail = `mailto:mardonov.mexriddin1997@gmail.com?subject=${mailSubject}&body=${cart}`
    //     window.open(mail);
    // }

    send_form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;

        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        cart.forEach(object => {
            object.name = name;
            object.phone = phone;
        });

        postData(cart).then(() => {
            localStorage.removeItem('cart')
            renderCart([])
            cartTotal.textContent = 0
        });
        // sendMail(JSON.stringify(cart));
    })
    
}

export default cart