const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String 
    title: String 
    image: String
    link: String 
  }

  type Auth{
    token: String 
    user: User
  }

  type Query {
    me: User
  }

  input bookInfo{
    authors: [String]
    description: String 
    title: String 
    image: String
    link: String 
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser:(username: String!, email: String!, password: String!):Auth
    saveBook(bookInfo: bookInfo!): User
    removeBook(bookID: ID): User
  }
`;

module.exports = typeDefs;