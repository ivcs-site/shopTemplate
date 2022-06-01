const postData = (cart) => {
  // console.log('postData', cart);
  const URL = 'http://localhost:3000/posts';
  // const URL = 'https://jsonplaceholder.typicode.com/posts';

  // return fetch('http://localhost:3000/products')
  // https://jsonplaceholder.typicode.com/posts


  return fetch(URL, {
    method: 'POST',
    body: JSON.stringify(...cart),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default postData