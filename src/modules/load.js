import getData from "./getData";
import getCat from "./getCat";
import renderGoods from "./renderGoods";

const load = () => {
    const cartBtn = document.getElementById('cart')

    getData().then((data) => {
        renderGoods(data)
    })
    getCat().then((data) => {
        renderCat(data)
    })
}

export default load