export const searchFillter = (products, valueInput) => {
    return products.filter((productsItem) => {
        return productsItem.title.toLowerCase().trim().includes(valueInput.toLowerCase().trim())
    })
}

export const categoryFillter = (products, valueInput) => {
    return products.filter((productsItem) => {
        return productsItem.category === valueInput
    })
}
export const priseFillter = (products, min, max) => {
    return products.filter((productsItem) => {
        if(min === '' && max === ''){
            return productsItem
        }else if (min !== '' && max !== ''){
            return productsItem.price > +min && productsItem.price < +max
        }else if(min !== '' && max === ''){
            return productsItem.price > +min
        }else if(min === '' && max !== ''){
            return productsItem.price < +max
        }
    })
}

export const checkedFillter = (products, valueInput) => {
    return products.filter((productsItem) => {
        if(valueInput) {
            return productsItem.sale === true
                   
        }else {
            return productsItem
        }
    })
}