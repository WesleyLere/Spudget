import React from 'react';
import Auth from '../utils/auth';
import Spuddy from '../images/logo.png';

function NavTabs() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (<>

        
        <div className="hover:scale-[1.2] hover:text-fuchsia-400 hover:drop-shadow-lg xl:mx-5 xl:mb-5 sm:m-1 p-2 nav-item">
            <a href='/dash'

            >
              <button className=''>
                Money Dashboard
              </button>

            </a>
          </div>

          <div className='hover:scale-[1.2] hover:text-teal-400 hover:drop-shadow-lg xl:mx-5 xl:mb-5 sm:m-1 p-2 nav-item'>
            <a href='/newTransactions'

            >
              <button className=''>
                New Transactions
              </button>

            </a>
          </div>
          <div className="hover:scale-[1.09] hover:text-amber-400 hover:drop-shadow-lg xl:mx-5 xl:mb-5 sm:m-1 p-2 nav-item">

            <button className="" onClick={() => Auth.logout()}>
              Logout
            </button>
        </div>
      </>
      )
    } else {
      return (<>
        <div className="hover:scale-[1.09] hover:text-amber-400 hover:drop-shadow-lg xl:mx-5 xl:mb-5 sm:m-1 p-2 nav-item">

          <a href='/login'

          >
            <button className="">
              Login
            </button>
          </a>
        </div>
        <div className="hover:scale-[1.2] hover:text-blue-400 hover:drop-shadow-lg xl:mx-5 xl:mb-5 sm:m-1 p-2 nav-item">
          <a href='/signup'

          >
            <button className=''>
              Sign Up
            </button>

          </a>
        </div>
      </>)
    }
  }

  return (
    <div className="xl:sticky xl:flex-row xl:im xl:top-1 xl:z-50 bg-lime-600 flex flex-row justify-center hover:shadow-inner rounded-3xl xl:m-10 sm:m-3 text-xl font-semibold sm:flex sm:flex-col sm:items-center">

      <div className='flex flex-row justify-start'>
        <a href='/'>
          <img className='m-2 h-16' src={Spuddy} alt='Potato'></img>
        </a>
      </div>
      <div>


        <nav className="text-neutral-200 justify-center xl:flex xl:flex-row nav nav-tabs sm:flex sm:flex-col sm:justify-between">
          <div className='flex xl:flex-row sm:flex-col'>
          {showNavigation()}
          </div>
          
        </nav>
      </div>
    </div>

  )
}

export default NavTabs;