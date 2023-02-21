import React, {useState} from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function LoginForm() {
    const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
      
      if (error) {
        console.log(error)
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
    return (<div className='xl:p-10 xl:w-full sm:p-5 xl:bg-gradient-to-t from-lime-600 to-lime-500 xl:flex xl:flex-row xl:items-center xl:justify-center'>
         <form onSubmit={handleFormSubmit} class=" xl:items-center flex flex-col xl:justify-center xl:w-full shadow-lg px-8 pt-6 pb-8 mb-4 rounded-2xl login-form" id='loginForm'>
            <h1 className='text-slate-200 flex justify-center text-5xl m-5'> Login here</h1>
            
            <div class="xl:items-center xl:w-1/4 xl:justify-center mb-4">
                <label class=" block text-slate-200 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow-lg border-2 rounded-full xl:w-full py-2 px-3 text-gray-700 border-green-600 focus:outline-none focus:shadow-outline"
                    id="loginUsername" type="text" name='email' placeholder="Email" onChange={handleChange}/>
            </div>
            <div class="xl:items-center xl:w-1/4  xl:justify-center mb-4">
                <label class="block text-slate-200 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input
                    class="shadow-lg border-2 rounded-full w-full py-2 px-3 text-gray-700 border-green-700 focus:outline-none focus:shadow-outline"
                    id="loginPassword" type="password" name='password' placeholder="Super Secret Password" onChange={handleChange}/>
            </div>
            <a href="/">
                <div class="flex items-center justify-center">
                    <button
                        class="transform transition duration-200 hover:scale-110 hover:shadow-md bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-4 px-6 mt-8 focus:outline-none focus:shadow-outline"
                        type="submit">
                        Login
                    </button>
                </div>
            </a>
        </form>
    </div>)
}

export default LoginForm