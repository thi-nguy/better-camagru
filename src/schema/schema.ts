import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type Book {
        id: ID
        name: String
        genre: String
        author: Author
    }

    type Author {
        id: ID! # khong duoc phep null
        name: String
        age: Int
        books: [Book]
    }

    # Root type
    type Query {
        books: [Book]
        book (id: ID!): Book #cach truyen tham so
        authors: [Author]
        author (id: ID!): Author
    }
`

export default typeDefs;
