import getData from "./getData";
import getCat from "./getCat";
import getSlide from "./getSlide";
import renderGoods from "./renderGoods";
import renderCat from "./renderCat";
import renderSlide from "./renderSlide";

const load = () => {
    const cartBtn = document.getElementById('cart')

    getData().then((data) => {
        renderGoods(data)
    })

    getCat().then((data) => {
        renderCat(data)
    })

    getSlide().then((data) => {
        renderSlide(data)
    })
}

export default load