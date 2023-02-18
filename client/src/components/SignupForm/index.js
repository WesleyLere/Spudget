import React, { useState } from 'react'
import { ADD_USER } from '../../utils/mutations'
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';


function SignupForm(props) {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState)
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                username: formState.username,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    return <div>
        <div className='xl:p-10  sm:p-5 xl:bg-gradient-to-t from-lime-600 to-lime-500 xl:flex xl:flex-row xl:items-center xl:justify-center'>

            <form onSubmit={handleFormSubmit} class="xl:items-center flex flex-col xl:justify-center  shadow-lg px-8 pt-6 pb-8 mb-4 rounded-2xl xl:w-full signUp-form" id='signUpForm'>

                <h1 className=' text-slate-200 flex justify-center text-5xl m-5'> Signup here!</h1>
                <div class="xl:items-center  xl:justify-center xl:w-1/4 mb-4">
                    <label class="block text-slate-200 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input
                        class="shadow-lg border-2 rounded-full w-full py-2 px-3 text-gray-700 border-green-500 focus:outline-none focus:shadow-outline"
                        id="username" type="text" name='username' placeholder="Username" onChange={handleChange} />
                </div>
                <div class="xl:items-center xl:justify-center xl:w-1/4 mb-4">
                    <label class="block text-slate-200 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input
                        class="shadow-lg border-2 rounded-full w-full py-2 px-3 text-gray-700 border-green-600 focus:outline-none focus:shadow-outline"
                        id="email" type="text" placeholder="Email" name='email' onChange={handleChange} />
                </div>
                <div class="xl:items-center xl:justify-center xl:w-1/4 mb-4">
                    <label class="block text-slate-200 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        class="shadow-lg border-2 rounded-full w-full py-2 px-3 text-gray-700 border-green-700 focus:outline-none focus:shadow-outline"
                        id="password" type="password" name='password' placeholder="Super Secret Password" onChange={handleChange} />
                </div>

                <div class="flex items-center justify-center">
                    <button
                        class="transform transition duration-200 hover:scale-110 hover:shadow-md bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-4 px-6 mt-8 focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign Up
                    </button>
                </div>

            </form>
        </div>
    </div>
}
export default SignupForm