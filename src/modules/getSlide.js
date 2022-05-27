const getSlide = () => {
    return fetch('https://preview-1f60a-default-rtdb.firebaseio.com/slider.json')
    .then((response) => {
      return response.json()
    })
}

export default getSlide