import { privateEncrypt } from "crypto";
import { books, authors } from "../data/mokupData";

const resolvers = {
  Query: {
    books: () => books,
    book: (_: any, args: { id: string }) =>
      books.find((book) => book.id.toString() === args.id),
    authors: () => authors,
    author: (_: any, args: { id: string }) =>
      authors.find((author) => author.id.toString() === args.id),
  },

  Book: {
    author: (parent: { authorID: number }) => {
      console.log(parent);
      return authors.find((author) => author.id === parent.authorID);
    },
  },

  Author: {
    books: (parent: any) => {
      console.log(parent);
      return books.filter((book) => book.authorID === parent.id);
    },
  },
};

export default resolvers;
