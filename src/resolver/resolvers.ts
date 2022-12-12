import { privateEncrypt } from "crypto";
import { books, authors } from "../data/mokupData";

const resolvers = {
  // Query
  Query: {
    books: () => books,
    book: (_: any, args: { id: string }) =>
      books.find((book) => book.id.toString() === args.id),
    authors: () => authors,
    author: (_: any, args: { id: string }) =>
      authors.find((author) => author.id.toString() === args.id),
  },

  Book: {
    author: (parent: { authorID: string }) => {
      console.log(parent);
      return authors.find((author) => author.id.toString() === parent.authorID);
    },
  },

  Author: {
    books: (parent: any) => {
      console.log(parent);
      return books.filter((book) => book.authorID === parent.id);
    },
  },

  // Mutation
  Mutation: {
    createAuthor: (_: any, args: { id: string; name: string; age: number }) =>
      args, // Tra lai toan bo nhung gi user dua vao bang params
    createBook: (
      parent: any,
      args: { id: string; name: string; genre: string, authorID: number }
    ) => args,
  },
};

export default resolvers;
