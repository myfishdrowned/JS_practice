const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render() {
    let libraryEl = document.querySelector('#library');
    libraryEl.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        book = myLibrary[i];
        bookEl = document.createElement('div');
        bookEl.setAttribute('class', 'book-card');
        bookEl.innerHTML = `
        <div class='card-header'>
        <h3 class='title'>Title: ${book.title} <h3> 
        <h5 class='author'>Author: ${book.author} <h5>
        </div>

        `;
        libraryEl.appendChild(bookEl);
    }

}

function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.getElementById('author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    render();

}

let newBookForm = document.querySelector('#new-book-form');
newBookForm.addEventListener('submit', addBookToLibrary)

let newBookBtn = document.querySelector('#new-book-btn');
newBookBtn.addEventListener('click', function () {
    newBookForm.style.display = 'flex';
})