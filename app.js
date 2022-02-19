function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
    this.info = function (){
        if (read){
            readValue = "have already read"
        } else {
            readValue = "have not read yet"
        }
        return `${title} by ${author}, ${pages} pages ${readValue}`
    }
}
const Book1 = new Book("Lord of the rings", "J.R. Tolkien", "10008000", false)
const Book2 = new Book("Random book 3", "author 3", "8000", true)
const Book3 = new Book("Lrandom book 4", "author 4", "86", true)
const Book4 = new Book("rebel book", "unknown", "683", false)


const myLibrary = [];


function addBookToLibrary(Book){
    myLibrary.push(Book.info())
}
addBookToLibrary(Book1)
addBookToLibrary(Book2)
addBookToLibrary(Book3)
addBookToLibrary(Book4)

