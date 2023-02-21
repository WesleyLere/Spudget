import React from 'react';
import auth from '../utils/auth';
import Spuddy from '../images/logo.png';
import { Link } from "react-router-dom";

function NavTabs() {

  function showNavigation() {
    if (auth.loggedIn()) {
      return (<>

        
        <div className="hover:scale-[1.2] hover:text-fuchsia-400 hover:drop-shadow-lg xl:mx-5 xl:mb-5 sm:m-1 p-2 nav-item">
            
            
              <Link to='/moneydash'>
                Money Dashboard
              </Link>

            
          </div>

          <div className='hover:scale-[1.2] hover:text-teal-400 hover:drop-shadow-lg xl:mx-5 xl:mb-5 sm:m-1 p-2 nav-item'>
            

            
          <Link to='/newTransactions'>
                Add Transaction
              </Link>


       
          </div>
          <div className="hover:scale-[1.09] hover:text-amber-400 hover:drop-shadow-lg xl:mx-5 xl:mb-5 sm:m-1 p-2 nav-item">

            <button className="" onClick={() => auth.logout()}>
              Logout
            </button>
        </div>
      </>
      )
    } else {
      return (<>
        <div className="hover:scale-[1.09] hover:text-amber-400 hover:drop-shadow-lg xl:mx-5 xl:mb-5 sm:m-1 p-2 nav-item">

         

          
            <Link to='/login'>
              Login
            </Link>
          
        </div>
        <div className="hover:scale-[1.2] hover:text-blue-400 hover:drop-shadow-lg xl:mx-5 xl:mb-5 sm:m-1 p-2 nav-item">
          
            <Link to='signup'>
              Sign Up
            </Link>

        </div>
      </>)
    }
  }

  return (
    <div className="xl:sticky xl:flex-row xl:im xl:top-1 xl:z-40 bg-lime-600 flex flex-row justify-center hover:shadow-inner rounded-3xl xl:m-10 sm:m-3 text-xl font-semibold sm:flex sm:flex-col sm:items-center">

      <div className='flex flex-row justify-start'>
        <img className='m-2 h-16' src={Spuddy} alt='Potato'></img>
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