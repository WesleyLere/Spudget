import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_TRANSACTION = gql`
  mutation addTransaction($date: Int!, $month: Int!, $year: Int!, $amount: Float!, $category: String!, $vendor: String) {
    addTransaction(date: $date, month: $month, year: $year, amount: $amount, category: $category, vendor: $vendor) {
      _id
      username
      transactions {
        _id
        date
        month
        year
        amount
        vendor
        category {
          _id
          name
        }
      }
    }
  }
`;

export const ADD_LIMIT = gql`
    mutation addLimit( $amount: Int!) {
    addLimit(amount: $amount) {
      _id
      username
      limits {
        _id
        amount
      }
    }
  }
`
