const fs = require("fs-extra");

function main() {
  fs.outputFile(
    "books/listBook.txt",
    "Judul: Psychology of Money \n Pengarang: Morgan Housel",
    () => {
      fs.copy("books/listBook.txt", "books/backup.txt", () => {
        fs.appendFile(
          "books/backup.txt",
          `Data sudah di Backup \n ${new Date()}`,
          () => {
            fs.readFile("books/backup.txt", "utf-8", (err, data) => {
              console.log(data);
              fs.copy("books", "books-callback", () => {
                fs.remove("books", () => {
                  fs.readFile(
                    "books-callback/backup.txt",
                    "utf-8",
                    (err, data2) => {
                      console.log(data2);
                    }
                  );
                });
              });
            });
          }
        );
      });
    }
  );
}

main();
