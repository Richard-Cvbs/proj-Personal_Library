function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
    this.readValue = function (){
        if (this.read){
           return "Already Read!"
        } return "Haven't Read Yet"
    }
    this.toggleRead = function(){
        if (this.read===true){
         return this.read = false
        } return this.read = true
    }
}
const Book1 = new Book("Pride and Prejudice", "Jane Austen", "334", true)
const myLibrary = [];
function addItem(Book){
    const container = document.querySelector(".library-cont")
    const newBook = document.createElement("div")
    newBook.className = "book-item"
    /* Create and style text */
    const bookText = document.createElement("div")
    bookText.className = "book-text"

    const bookTitle = document.createElement("div")
    bookTitle.className = "book-title"
    bookTitle.textContent = Book.title
    bookText.appendChild(bookTitle)

    const bookAuthor = document.createElement("div")
    bookAuthor.className = "book-autor"
    bookAuthor.textContent = Book.author
    bookText.appendChild(bookAuthor)

    const bookPageCount = document.createElement("div")
    bookPageCount.className = "book-pageCount"
    bookPageCount.textContent = `${Book.pages} Pages`
    bookText.appendChild(bookPageCount)

    const bookRead = document.createElement("div")
    bookRead.className = "book-read"
    bookRead.textContent = Book.readValue()
    bookText.appendChild(bookRead)

    newBook.appendChild(bookText)

    /*Create and style buttons */
    const bttnContainer = document.createElement('div')
    bttnContainer.className = "button-cont"

    const toggleReadBttn = document.createElement('button')
    toggleReadBttn.className = "book-toggleRead"
    toggleReadBttn.addEventListener('click', e=>{
        toggleReadAct(e.target,Book)
    })

    const toggleReadImg = document.createElement("img")
    toggleReadImg.setAttribute("src", "/assets/menu_book_black_36dp.svg")
    toggleReadBttn.appendChild(toggleReadImg)

    bttnContainer.appendChild(toggleReadBttn)

    const removeBookButtn = document.createElement('button')
    removeBookButtn.className = "book-remove"
    removeBookButtn.addEventListener('click',e =>{
        removeBook(e.target,Book)
    })
    
    const removeBookImg = document.createElement('img')
    removeBookImg.setAttribute("src", "/assets/remove_black.svg")
    removeBookButtn.appendChild(removeBookImg)

    bttnContainer.appendChild(removeBookButtn)

    newBook.appendChild(bttnContainer)

    container.appendChild(newBook)
}

function addBookToLibrary(Book){
    myLibrary.push(Book)
    addItem(Book)
    return
}
function removeBook(e,Book){
    let indexOfBook = myLibrary.indexOf(Book)
    if (indexOfBook > -1) {
        myLibrary.splice(indexOfBook, 1);
      }
    let thisBook = e.closest('.book-item')
    thisBook.parentNode.removeChild(thisBook)
}
function toggleReadAct(e,Book){
    Book.toggleRead()
    Book.read
    let thisBook = e.closest('.book-item')
    let readNode = thisBook.querySelector('.book-read')
    readNode.textContent = Book.readValue()
}
function toggleFormListen(){
    const addButton = document.querySelector('.add-button')
    addButton.addEventListener('click', e=>{
        console.log(e.target)
        toggleForm(e.target)
    })
}
function toggleForm(e){
    let thisFooter = e.closest('footer')
    let thisForm = thisFooter.querySelector('.form-cont')
    thisForm.classList.toggle('hidden')
    console.log(thisForm)
}
toggleFormListen()