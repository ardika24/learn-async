const fs = require("fs-extra");

function withPromise() {
  fs.outputFile(
    "books/listBook.txt",
    "Judul: Medications \n Pengarang: Marcus Aurelius"
  )
    .then(() => {
      return fs.copy("books/listBook.txt", "books/backup.txt");
    })
    .then(() => {
      return fs.appendFile(
        "books/backup.txt",
        `\n Data sudah di backup \n ${new Date()}`
      );
    })
    .then(() => {
      return fs.readFile("books/backup.txt", "utf-8");
    })
    .then((book) => {
      console.log(book);
    })
    .then(() => {
      return fs.copy("books", "books-promise");
    })
    .then(() => {
      return fs.remove("books");
    })
    .then(() => {
      return fs.readFile("books-promise/backup.txt", "utf-8");
    })
    .then((bookPromise) => {
      console.log(bookPromise);
    });
}

withPromise();
