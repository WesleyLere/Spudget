import React from 'react';
import SignupForm from '../componets/SignupForm';

const SignUp = () => {
    return (
        <section className="">
            <div className='xl:p-20 sm:p-5 xl:bg-gradient-to-t from-lime-600 to-lime-500 xl:flex xl:flex-row xl:items-center xl:justify-center'>
                <img className='rounded-3xl drop-shadow-lg' src='signUpPotatos.jpg'></img>
            </div>
            <div className=''>
                <form className=''>
                <SignupForm/>
                </form>
            </div>

        </section>
    )
}

export default SignUp; 