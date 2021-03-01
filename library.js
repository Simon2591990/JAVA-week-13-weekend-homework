class Library{
  constructor(books = []) {
  this.books = books;
 }
};

Library.prototype.bookCount = function () {
  return this.books.length;
};

Library.prototype.addBook = function (newBook) {
  this.books.push(newBook);
};

Library.prototype.addBooks = function (newBooks) {
  newBooks.forEach(book => this.books.push(book));
};

Library.prototype.printInventory = function () {
  this.books.forEach((book) => {
    let {author: author, title: title, genre: genre} = book
    console.log(`${title} by ${author}`)
    // console.log(`${book.title} by ${book.author}`);
  });
};

export default Library;
