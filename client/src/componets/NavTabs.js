import React from 'react';
// I want to have the nav bar change when logged in
// prior to logging in nav bar would show log in and sign up buttons
//after logging in nav bar would show "dashboard" "import" and "sign out" 
// not sure how implement that in react. 
function NavTabs({currentPage, handlePageChange}) {
    return (

        <div className="bg-lime-600 flex flex-row justify-center hover:shadow-inner rounded-3xl m-10 text-xl font-semibold">
           
        <div className='flex flex-row justify-start'>
            <img className='m-5 h-16' src='logo.png'></img>
        </div>
            <nav className="text-neutral-200 justify-center flex flex-row nav nav-tabs">
        
              <li className="hover:scale-[1.09] hover:text-amber-400 hover:drop-shadow-lg m-5 p-5 nav-item">
                
              <a href='#Login'
                onClick={() => handlePageChange('Login')}
                className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
                >
                    <button className="">
                        Login
                    </button>
                </a>
              </li>
              <li className="hover:scale-[1.2] hover:text-blue-400 hover:drop-shadow-lg m-5 p-5 nav-item">
              <a href='#signup'
                onClick={() => handlePageChange('Signup')}
                className={currentPage === 'signup' ? 'nav-link active' : 'nav-link'}
                >
                    <button className=''>
                        Sign Up
                    </button>

                </a>
              </li>
              <li className="hover:scale-[1.2] hover:text-emerald-400 hover:drop-shadow-lg text m-5 p-5 nav-item">
              <a href='#cta'
                onClick={() => handlePageChange('Cta')}
                className={currentPage === 'cta' ? 'nav-link active' : 'nav-link'}
                >
                    <button className=''>
                        Cta
                    </button>

                </a>
              </li>
             
              <li className="hover:scale-[1.2] hover:text-fuchsia-400 hover:drop-shadow-lg m-5 p-5 nav-item">
              <a href='#moneydash'
                onClick={() => handlePageChange('Moneydash')}
                className={currentPage === 'moneydash' ? 'nav-link active' : 'nav-link'}
                >
                    <button className=''>
                        Money Dashboard
                    </button>

                </a>
              </li>
            </nav>
  
          </div>
    )
}

export default NavTabs;