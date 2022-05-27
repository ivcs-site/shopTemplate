const getData = () => {
    return fetch('https://preview-1f60a-default-rtdb.firebaseio.com/products.json')
    .then((response) => {
      return response.json()
    })
}

export default getData