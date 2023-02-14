// ================ ЗАДАЧА 1 ===========================

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.state = 100;
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.state = 100;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.state = 100;
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.state = 100;
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.state = 100;
    this.type = "detective";
  }
}
// ================ ЗАДАЧА 2 ==========================

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    return this.books.find((book) => book[type] === value) || null;
  }
  giveBookByName(bookName) {
    const thisBook = this.findBookBy("name", bookName);
    if (thisBook) {
      this.books.splice(this.books.indexOf(bookName), 1);
      return thisBook;
    }
    return null;
  }
}

// ============ ЗАДАЧА 3 ===========================

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }
  addMark(mark, subject) {
    if (mark >= 2 && mark <= 5) {
      if (this.marks[subject] === undefined) {
        this.marks[subject] = [];
      }
      this.marks[subject].push(mark);
    }
  }
  getAverageBySubject(subject) {
    let averageBySubject = 0;
    if (this.marks[subject] !== undefined) {
      averageBySubject = this.marks[subject].reduce((acc, item, index, arr) => {
        acc += item;
        if (index === arr.length - 1) {
          return acc / arr.length;
        }
        return acc;
      }, 0);
    }
    return averageBySubject;
  }
  getAverage() {
    let overallAverage = Object.keys(this.marks).reduce(
      (acc, item, index, arr) => {
        acc += this.getAverageBySubject([item]);
        if (index === arr.length - 1) {
          return acc / arr.length;
        }
        return acc;
      },
      0
    );
    return overallAverage;
  }
}
