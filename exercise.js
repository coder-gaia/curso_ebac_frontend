class Item {
    _title;
    _author;

    showInfo() {
        return `Title: ${this._title},  Author/Director: ${this._author}`
    }

    _setTitle(title) {
        this._title = title;
    }

    _setAuthor(author) {
        this._author = author;
    }

    setTitleAndAuthor(title, author) {
        this._setTitle(title);
        this._setAuthor(author);
        console.log(this.showInfo())
    }
}

class Book extends Item {
    showInfo() {
        return `Book {
            ${super.showInfo()}
        }`
    }
}

class Movie extends Item {
    showInfo() {
        return `Movie {
            ${super.showInfo()}
        }`
    }
}
class Song extends Item {
    showInfo() {
        return `Song {
            ${super.showInfo()}
        }`
    }
}


const petSematary = new Book();
const endGame = new Movie();
const backInBlack = new Song();

petSematary.setTitleAndAuthor('Pet Sematary', 'Stephen King');
endGame.setTitleAndAuthor("Avengers: End Game", "Russo Bros");
backInBlack.setTitleAndAuthor("Back in Black", "AC/DC")
