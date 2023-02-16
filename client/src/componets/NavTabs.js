import React from 'react';
// I want to have the nav bar change when logged in
// prior to logging in nav bar would show log in and sign up buttons
//after logging in nav bar would show "dashboard" "import" and "sign out" 
// not sure how implement that in react. 
function NavTabs({ tab, handlePageChange }) {
  return (
    <div className="xl:sticky xl:top-1 xl:z-50 bg-lime-600 flex flex-row justify-center hover:shadow-inner rounded-3xl xl:m-10 sm:m-3 text-xl font-semibold sm:flex sm:flex-col sm:items-center">

      <div className='flex flex-row justify-start'>
        <img className='m-5 h-16' src='logo.png'></img>
      </div>
      <div>

     
      <nav className="text-neutral-200 justify-center flex flex-row nav nav-tabs sm:flex sm:flex-col sm:justify-between">

        <li className="hover:scale-[1.09] hover:text-amber-400 hover:drop-shadow-lg xl:m-5 sm:m-1 p-5 nav-item">

          <a href='#Login'
            onClick={() => handlePageChange('Login')}
            className={tab === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            <button className="">
              Login
            </button>
          </a>
        </li>
        <li className="hover:scale-[1.2] hover:text-blue-400 hover:drop-shadow-lg xl:m-5 sm:m-1 p-5 nav-item">
          <a href='#signup'
            onClick={() => handlePageChange('Signup')}
            className={tab === 'signup' ? 'nav-link active' : 'nav-link'}
          >
            <button className=''>
              Sign Up
            </button>

          </a>
        </li>
        <li className="hover:scale-[1.2] hover:text-emerald-400 hover:drop-shadow-lg text xl:m-5 sm:m-1 p-5 nav-item">
          <a href='#cta'
            onClick={() => handlePageChange('Cta')}
            className={tab === 'cta' ? 'nav-link active' : 'nav-link'}
          >
            <button className=''>
              Cta
            </button>

          </a>
        </li>

        <li className="hover:scale-[1.2] hover:text-fuchsia-400 hover:drop-shadow-lg xl:m-5 sm:m-1 p-5 nav-item">
          <a href='#moneydash'
            onClick={() => handlePageChange('Moneydash')}
            className={tab === 'moneydash' ? 'nav-link active' : 'nav-link'}
          >
            <button className=''>
              Money Dashboard
            </button>

          </a>
        </li>

        <li className='hover:scale-[1.2] hover:text-teal-400 hover:drop-shadow-lg xl:m-5 sm:m-1 p-5 nav-item'>
          <a href='#newTransactions'
            onClick={() => handlePageChange('New Transactions')}
            className={tab === 'New Transactions' ? 'nav-link active' : 'nav-link'}
          >
            <button className=''>
              New Transactions
            </button>

          </a>
        </li>
      </nav>
       </div>
    </div>
   
  )
}

export default NavTabs;