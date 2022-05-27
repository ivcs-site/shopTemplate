const getCat = () => {
    return fetch('https://preview-1f60a-default-rtdb.firebaseio.com/category.json')
    .then((response) => {
      return response.json()
    })
}

export default getCat