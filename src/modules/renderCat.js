const renderCat = (cat) => {
    const catWrapper = document.querySelector('.category-content')

    // localStorage.setItem('products', JSON.stringify(products))

    // productsWrapper.innerHTML = ''

    cat.forEach((catItem) => {
        catWrapper.insertAdjacentHTML('beforeend', `
        <a href="#products" class="category-content__item category-content__item-1 data-key="${catItem.id}"
        style="background-image: url('${catItem.img}');
                       background-position: center;
                       background-repeat: no-repeat;
                       background-size: cover;">
            <span class="category-content__item-name">${catItem.title}</span>
        </a>
        `)
    })
}

export default renderCat