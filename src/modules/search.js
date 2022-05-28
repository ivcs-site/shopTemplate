import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFillter } from "./fillters";

const search = () => {
    // console.log('search');

    const searchInput = document.querySelector('.navbar-nav__search--input')

    searchInput.addEventListener('input', (event) => {
        // console.log(event);

        const valueInput = event.target.value;

        getData().then((data) => {
            renderGoods(searchFillter(data, valueInput))
        })
    })
}

export default search