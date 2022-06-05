const fs = require("fs-extra");

async function withAsync() {
  await fs.outputFile(
    "books/listBook.txt",
    "Judul: Medications \n Pengarang: Marcus Aurelius"
  );
  await fs.copy("books/listBook.txt", "books/backup.txt");
  await fs.appendFile(
    "books/backup.txt",
    `\n Data sudah di Backup \n ${new Date()}`
  );

  const book = await fs.readFile("books/backup.txt", "utf-8");
  console.log(book);

  await fs.copy("books", "books-async");
  await fs.remove("books");

  const bookAsync = await fs.readFile("books-async/backup.txt", "utf-8");
  console.log(bookAsync);
}

withAsync();
