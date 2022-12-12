import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type Book {
        id: ID
        name: String
        genre: String
    }

    type Author {
        id: ID! # khong duoc phep null
        name: String
        age: Int
    }

    # Root type
    type Query {
        books: [Book]
        book (id: ID!): Book #cach truyen tham so
        authors: [Author]
       
    }
`

export default typeDefs;
