import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Cta from '../pages/Cta';
import MoneyDash from '../pages/MoneyDash';
import receiptimport from '../pages/receiptImport';
import signup from '../pages/signup';

export default function ProjectContainer() {
    const [currentPage, setCurrentPage] = useState('Cta')

    const renderPage = () => {
        if (currentPage ==='MoneyDash') {
            return <MoneyDash />
        }
       if 
    }
}