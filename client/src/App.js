import React, {useState} from 'react';
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
  const [tab, setTab] = useState()
    
  const renderTab = () => {
    if (tab === "Moneydash") {
      return <MoneyDash/>
    } else if (tab === "Signup"){
        return <Signup />;
    }else if (tab === "Login"){
        return <Login/>
    } else if (tab === "New Transactions"){
        return <TransactionPage/>
    }else {
        return <Cta />;
    }
  }
  const handlePageChange = (currentTab) => setTab(currentTab);
  
  return (
    <ApolloProvider client={client}>
      <NavTabs 
        tab = {tab}
        handlePageChange = {handlePageChange}
      >
      </NavTabs>
      <main>
        {renderTab()}
      </main>
    </ApolloProvider>
  );

}

export default App