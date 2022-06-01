const getData = () => {
  // return fetch(`https://preview-1f60a-default-rtdb.firebaseio.com/products.json?${str ? `search=${str}` : ''}`) - Фильтрация обектов из сервера (отправка стринг запросов на сервер обычно такое делается на реальных проектах) Firebase не потходит под реальные проекты нужна кастомные сервера для фильтрации обектов в поисковике для обработки данный которые мы отправляем из фронта !!!

  const URL = 'http://localhost:3000/products';
  // const URL = 'https://preview-1f60a-default-rtdb.firebaseio.com/products.json';
  // return fetch('http://localhost:3000/products')
  return fetch(URL)
    .then((response) => {
      return response.json()
    })
}

export default getData