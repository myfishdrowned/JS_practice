const myLibrary = [];

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    const newBookBtn = document.querySelector('#new-book-btn');
    newBookBtn.addEventListener('click', function () {
        const newBookForm = document.querySelector('#new-book-form');
        newBookForm.style.display = 'flex';
    });
}

addBookToLibrary();


Book();
