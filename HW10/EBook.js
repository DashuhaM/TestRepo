import { Book } from "./Book.js"

export class EBook extends Book {
    constructor(title, author, yearOfPublication, format) {
       super(title, author, yearOfPublication);
       this._format = format;
    }

get format() { 
    return this._format; 
}

set format(format) {
    const allowedFormats = ["pdf", "epub", "mobi"];
    if (!allowedFormats.includes(format.toLowerCase())) {
        console.log(`Формат має бути: ${allowedFormats.join(", ")}`);
        return;
        }
    this._format = format;
    }


static revertBook(Book, format) {
       return new EBook (Book.title, Book.author, Book.yearOfPublication, format);
    }



    printEInfo () {
    console.log(`The "${this.title}" book was writen by ${this.author} and publicated in ${this.yearOfPublication} year in ${this.format} formate.`)
return this};
}
