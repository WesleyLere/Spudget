const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Query {
    mock: String
  }
  type Mutation {
    mockMut: String
  }
`;
module.exports = typeDefs;
