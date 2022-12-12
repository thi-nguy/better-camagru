import {books, authors} from '../data/static'

const resolvers = {
    Query: {
        books: () => books,
        book: (args: {id: string}) =>  books.find(book => book.id.toString() === args.id),
        authors: () => authors,
    }
}

export default resolvers;