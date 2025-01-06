const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.getElementById('author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    console.log(myLibrary);

}

document.querySelector('#new-book-form').addEventListener('submit', addBookToLibrary)
