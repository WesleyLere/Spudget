import React from 'react';
// I want to have the nav bar change when logged in
// prior to logging in nav bar would show log in and sign up buttons
//after logging in nav bar would show "dashboard" "import" and "sign out" 
// not sure how implement that in react. 
function NavTabs({currentPage, handlePageChange}) {
    return (
        <ul className=''>
            <li className=''>
                <a href='#Login'
                onClick={() => handlePageChange('Login')}
                className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
                >
                    <button className="">
                        Login
                    </button>
                </a>
            </li>

            <li className=''>
                <a href='#signup'
                onClick={() => handlePageChange('Signup')}
                className={currentPage === 'signup' ? 'nav-link active' : 'nav-link'}
                >
                    <button className=''>
                        Sign Up
                    </button>

                </a>
            </li>
            <li className=''>
                <a href='#cta'
                onClick={() => handlePageChange('Cta')}
                className={currentPage === 'cta' ? 'nav-link active' : 'nav-link'}
                >
                    <button className=''>
                        Cta
                    </button>

                </a>
            </li>
            <li className=''>
                <a href='#moneydash'
                onClick={() => handlePageChange('Moneydash')}
                className={currentPage === 'moneydash' ? 'nav-link active' : 'nav-link'}
                >
                    <button className=''>
                        Money Dashboard
                    </button>

                </a>
            </li>
        </ul>
    )
}

export default NavTabs;