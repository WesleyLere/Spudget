import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Cta from '../pages/Cta';
import MoneyDash from '../pages/MoneyDash';
import ReceiptImport from '../pages/ReceiptImport';
import SignUp from '../pages/SignUp';

export default function ProjectContainer() {
    const [currentPage, setCurrentPage] = useState('Cta')

    const renderPage = () => {
        if (currentPage === 'Cta') {
            return <Cta />
        }
        if (currentPage === 'MoneyDash') {
            return <MoneyDash />
        }
        if (currentPage === 'ReceiptImport') {
            return <ReceiptImport />
        }
        if (currentPage === 'SignUp') {
            return <SignUp />
        }
    };


    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}