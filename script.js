let newArr = []
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
        <div class="card" style="width: 23rem; background-color:grey;">
        <img src="${book.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
        </div>
        <div class="card-body">
        <a href="#" class="card-link" style="color:red;"></a>
          <a href="#" class="card-link" style="color:white; text-type:bold;" >Price:${book.price}£</a>
          <button class="changes" onclick="changeStyle()" background-color:black; color:white; width:8rem; height:3rem;">Add to cart</button>
          <button onclick="skipItem(event)" type = "button" style="background-color:black; color:white; width:8rem; height:3rem;">SKIP</button>
          <a href="#" class="card-link"></a>
        </div>
      </div>
      </div>
            `
    })
    const btns = document.querySelectorAll(".changes")
    for (let btn of btns) {
        btn.addEventListener("click",
            () => {
                let card = btn.parentElement.parentElement.parentElement
                btn.style.backgroundColor = 'red';
                newArr.push(card)
            }
        )
    }
}



function skipItem(event) {
    event.target.parentNode.parentNode.classList.add("d-none")
}