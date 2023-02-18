const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Transaction {
    _id: ID
    date: Int
    month: Int
    year: Int
    amount: Float
    vendor: String
    category: Category
  }

  type Limit {
    _id: ID
    month: Int
    year: Int
    amount: Int
  }

  type User {
    _id: ID
    username: String
    email: String
    transactions: [Transaction]
    limits: [Limit]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    transactionByMonth(month: Int!): [Transaction]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addTransaction(date: Int!, month: Int!, year: Int!, amount: Float!, vendor: String, category: String!): User
    addLimit(month: Int!, year: Int!, amount: Int!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
