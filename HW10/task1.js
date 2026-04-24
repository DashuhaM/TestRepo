import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

// створюю нові екземпляри класів Book i EBook
let Book1 = new Book("Romeo and Juliet", "William Shakespeare", 1597);
let Book2 = new Book("Notre Dame de Paris", "Victor Hugor", 1831);
let Book3 = new Book("Martin Eden", "Jack London", 1909);

let eBook1 = new EBook("Harry Potter", "Rowling", 1997, "epub");
let eBook2 = new EBook("Notre Dame de Paris", "Victor Hugo", 1831, "pdf");

// викликаю printInfo методи для усіх обʼєктів
eBook1.printEInfo();

// перезаписую властивості першого обʼєкта book1
try {
    Book1.yearOfPublication = 9999;
} catch (error) {
    console.log(error.message);
}
// сторюю масив книг і викликаю і виводжу в консоль результат статичного методу findOldest що знаходить найдавнішу книгу
let allBooks = [Book1, Book2, Book3, eBook1, eBook2];
console.log(Book.findOldest(allBooks));

// створюю нові обʼєкти eBook за допомогою статичного класу createEBook

let eBook3 = EBook.revertBook(Book3, "fb2");
let eBook4 = EBook.revertBook(Book2, "fb2");
console.log(eBook3, eBook4);
