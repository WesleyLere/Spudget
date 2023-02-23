import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Signup from './pages/signup'
import MoneyDash from './pages/MoneyDash'
import Cta from './pages/Cta'
import NavTabs from './components/NavTabs'
import Login from './pages/Login';

import TransactionPage from './pages/NewTransactions';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavTabs />

        <Routes>
          <Route
            path="/"
            element={<Cta />}
          />
          <Route
            path="/dash"
            element={<MoneyDash />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/moneyDash"
            element={<MoneyDash />}
          />
          <Route
            path="/newTransactions"
            element={<TransactionPage />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  
  );

}

export default App