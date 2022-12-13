import { mongoDataMethods } from "../data/api";

const resolvers = {
  // Query
  Query: {
    books: async () => await mongoDataMethods.getAllBooks(null),
    book: async (_: any, args: { id: string }) =>
      await mongoDataMethods.getBookById(args.id),

    authors: async () => await mongoDataMethods.getAllAuthors(),
    author: async (_: any, args: { id: string }) =>
      await mongoDataMethods.getAuthorById(args.id),
  },

  
  Book: {
    author: async (parent: { authorID: string }) =>
    await mongoDataMethods.getAuthorById(parent.authorID),
  },
  
  Author: {
    books: async (parent: { id: string }) => {
      return await mongoDataMethods.getAllBooks({authorID : parent.id});
    },
  },

  // Mutation
  Mutation: {
    createAuthor: async (
      _: any,
      args: { name: string; age: number },
      context: { mongoDataMethods: any }
    ) => await context.mongoDataMethods.createAuthor(args),
    createBook: async (
      _: any,
      args: { name: string; genre: string; authorID: string },
      context: { mongoDataMethods: any }
    ) => await context.mongoDataMethods.createBook(args),
  },
};

export default resolvers;
