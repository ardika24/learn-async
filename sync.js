const fs = require("fs-extra");
const time = new Date();

function forSync() {
  fs.outputFileSync(
    "books/listBook.txt",
    "Judul: Meditations \n Pengarang: Marcus Aurelius"
  );
  fs.copySync("books/listBook.txt", "books/backup.txt");
  fs.appendFileSync("books/backup.txt", `\n Data sudah di backup \n ${time}`);

  const book = fs.readFileSync("books/backup.txt", "utf-8");
  console.log(book);

  fs.copySync("books", "books-sync");
  fs.removeSync("books");

  const bookSync = fs.readFileSync("books-sync/backup.txt");
  console.log(bookSync);
}

forSync();
