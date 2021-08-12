fetch("https://striveschool-api.herokuapp.com/books", {
    "method": "GET",
})
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then((books) => {
        arrayOfBooks = books
        console.log(arrayOfBooks)
        makeBooks()
    })
    .catch(error => { console.log(error) })

function makeBooks(book) {
    arrayOfBooks.forEach((book) => {
        let row = document.querySelector(".row")
        row.innerHTML += `<div  class="col-6 col-md-3 col-sm-2">
        <div class="card" style="width: 18rem;">
        <img src="${book.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
        </div>
        <div class="card-body">
        <a href="#" class="card-link">${book.category}</a>
          <a href="#" class="card-link">${book.price}</a>
          <button>add to cart</button>
          <a href="#" class="card-link"></a>
        </div>
      </div>
      </div>
            `
    })
}