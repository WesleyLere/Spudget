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
  
  type DailySpending {
    date: Int
    amount: Float
  }

  type TransactionByMonth {
    dailySpending: [DailySpending]
    accumulativeSpending: [DailySpending]
    monthlyTotal: Float
    limit: Int
  }

  type Query {
    user: User
    transactionByMonth(month: Int!): TransactionByMonth
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addTransaction(date: Int!, month: Int!, year: Int!, amount: Float!, vendor: String, category: String!): User
    addLimit( amount: Int!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
