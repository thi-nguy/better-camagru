const Book = require("../models/Book");
const Author = require("../models/Author");

export const mongoDataMethods = {
  getAllBooks: async (condition: any) => condition === null ? await Book.find() : await Book.find(condition),
  
  getAllAuthors: async () => await Author.find(),

  createAuthor: async (args: { name: string; age: number }) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },

  createBook: async (args: {
    name: string;
    genre: string;
    authorID: string;
  }) => {
    const newBook = new Book(args);
    return await newBook.save();
  },

  getBookById: async (id: string) => await Book.findById(id),
  getAuthorById: async (id: string) => await Author.findById(id),

};
