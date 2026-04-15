export class Book {
    constructor(title, author, yearOfPublication) {
        this._title = title;
        this._author = author;
        this._yearOfPublication = yearOfPublication;
    }

    get title() {
    return this._title;
}

    get author() {
    return this._author;
}
   
  
    get yearOfPublication() {
    return this._yearOfPublication;
}


set yearOfPublication(yearOfPublication) {
    if (yearOfPublication <=0 || yearOfPublication > 2026) {
        console.log("Unavailable year")
        return ;
    }
    this._yearOfPublication = yearOfPublication;
}

set title(title) {
    if (typeof value !== "string" || typeof value.trim() === "") {
        console.log("Title should not be empty")
        return ;
    }
    this._title = title;
}

set author(author) {
    if (typeof value !== "string" || typeof value.trim() === "") {
        console.log("Author field should not be empty")
        return ;
    }
    this._author = author;
}


static findOldest(allBooks) {
       return allBooks.reduce ((oldest, newest) => {
        if (oldest.yearOfPublication < newest.yearOfPublication) {
            return oldest;
        } else {
            return newest;
        }
       }, allBooks [0]);
    }


    printInfo () {
    console.log(`The "${this.title}" book was writen by ${this.author} and publicated in ${this.yearOfPublication} year`);
    return this;
}
}