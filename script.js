let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    renderBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBooks();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    renderBooks();
}

function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h4>${book.title}</h4>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: <span class="read-status">${book.read ? 'Read' : 'Not Read'}</span></p>
            <button class="toggle-read">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
            <button class="remove-book">Remove</button>
        `;
        bookCard.querySelector('.toggle-read').addEventListener('click', () => toggleRead(index));
        bookCard.querySelector('.remove-book').addEventListener('click', () => removeBook(index));
        bookList.appendChild(bookCard);
    });
}

document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    const pages = document.getElementById('pagesInput').value;
    const read = document.getElementById('readInput').checked;
    addBookToLibrary(new Book(title, author, pages, read));
    this.reset();
});