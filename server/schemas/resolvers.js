const { AuthenticationError } = require('apollo-server-express');
const { User, Category } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    mock: () => {
      return "Hello"
    }
  },
  Mutation: {
    mockMut: () => {
      return "Goodbye"
    }
  }
};

module.exports = resolvers;
