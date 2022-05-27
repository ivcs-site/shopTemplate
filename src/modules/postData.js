const postData = () => {
    return fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(res => res.json())
}

export default postData