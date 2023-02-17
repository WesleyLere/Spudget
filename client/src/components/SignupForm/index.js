import React from 'react'

function SignupForm() {
    return <div>
        <div className='xl:p-10  sm:p-5 xl:bg-gradient-to-t from-lime-600 to-lime-500 xl:flex xl:flex-row xl:items-center xl:justify-center'>

            <form class="xl:items-center flex flex-col xl:justify-center  shadow-lg px-8 pt-6 pb-8 mb-4 rounded-2xl xl:w-full signUp-form" id='signUpForm'>

                <h1 className=' text-slate-200 flex justify-center text-5xl m-5'> Signup here!</h1>
                <div class="xl:items-center  xl:justify-center xl:w-3/4 mb-4">
                    <label class="block text-slate-200 text-sm font-bold mb-2" for="signupUsername">
                        Username
                    </label>
                    <input
                        class="shadow-lg border-2 rounded-full w-full py-2 px-3 text-gray-700 border-green-500 focus:outline-none focus:shadow-outline"
                        id="signupUsername" type="text" placeholder="Username" />
                </div>
                <div class="xl:items-center xl:justify-center xl:w-3/4 mb-4">
                    <label class="block text-slate-200 text-sm font-bold mb-2" for="signupEmail">
                        Email
                    </label>
                    <input
                        class="shadow-lg border-2 rounded-full w-full py-2 px-3 text-gray-700 border-green-600 focus:outline-none focus:shadow-outline"
                        id="signupEmail" type="text" placeholder="Email" />
                </div>
                <div class="xl:items-center xl:justify-center xl:w-3/4 mb-4">
                    <label class="block text-slate-200 text-sm font-bold mb-2" for="signupPassword">
                        Password
                    </label>
                    <input
                        class="shadow-lg border-2 rounded-full w-full py-2 px-3 text-gray-700 border-green-700 focus:outline-none focus:shadow-outline"
                        id="signupPassword" type="password" placeholder="Super Secret Password" />
                </div>
             
                    <div class="flex items-center justify-center">
                        <button
                            class="transform transition duration-200 hover:scale-110 hover:shadow-md bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-4 px-6 mt-8 focus:outline-none focus:shadow-outline"
                            type="button">
                            Sign Up
                        </button>
                    </div>
                
            </form>
        </div>
    </div>
}
export default SignupForm