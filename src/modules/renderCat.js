const renderCat = (cat) => {
    const catWrapper = document.querySelector('.category-content')

    // localStorage.setItem('products', JSON.stringify(products))

    // productsWrapper.innerHTML = ''

    cat.forEach((catItem) => {
        catWrapper.insertAdjacentHTML('beforeend', `
        <a href="#products" class="category-content__item category-content__item-1 data-key="${catItem.id}">
            <span class="category-content__item-name" style="background: url("${catItem.img}") no-repeat center center / cover;">${catItem.title}</span>
        </a>
        `)
    })
}

export default renderCat