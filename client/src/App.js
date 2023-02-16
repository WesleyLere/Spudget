import React, {useState} from 'react';
import Signup from './pages/signup'
import MoneyDash from './pages/MoneyDash'
import Cta from './pages/Cta'
import NavTabs from './components/NavTabs'
import Login from './pages/Login';

import TransactionPage from './pages/NewTransactions';

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
    <div>
      <NavTabs 
        tab = {tab}
        handlePageChange = {handlePageChange}
      >
      </NavTabs>
      <main>
        {renderTab()}
      </main>
    </div>
  );

}

export default App