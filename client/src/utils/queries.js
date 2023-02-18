import { gql } from '@apollo/client';

export const QUERY_TRANSACTIONS = gql`
  query getTransactions($month: Int!) {
    transactionByMonth(month: $month) {
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
`;

export const QUERY_USER = gql`
  query getUsername {
    user {
      _id
      username
    }
  }
`;

export const QUERY_USER_DATA = gql`
  query getUserData {
    user {
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
      limits {
        _id
        month
        year
        amount
      }
    }
  }
`;