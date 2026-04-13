const library = [
  {
    title: "Dom Casmurro",
    author: "Machado de Assis",
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: "1984",
    author: "George Orwell",
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: "O Hobbit",
    author: "J.R.R. Tolkien",
    status: {
      own: true,
      reading: false,
      read: false
    }
  }
];

library.forEach(book => {
  book.status.read = true;
});

const [{ title: firstBook }] = library;

console.log(firstBook);

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);