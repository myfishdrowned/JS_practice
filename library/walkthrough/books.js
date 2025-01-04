const myLibrary = [];

function Book() {
    function addBookToLibrary() {
        const newBookBtn = document.querySelector('#new-book-btn');
        newBookBtn.addEventListener('click', function () {
            const newBookForm = document.querySelector('#new-book-form');
            newBookForm.style.display = 'flex';
        });
    }

    addBookToLibrary();
}

Book();
