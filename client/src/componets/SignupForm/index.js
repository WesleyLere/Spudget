import React from 'react'

function SignupForm() {
    return <div>

        <form class=" bg-gradient-to-t from-lime-300 to-lime-500 shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-4 signUp-form">
            <h2> Signup here!</h2>
            <div class="mb-4">
                <label class="block text-slate-200 text-sm font-bold mb-2" for="signupUsername">
                    Username
                </label>
                <input
                    class="shadow-lg border-2 rounded-full w-full py-2 px-3 text-gray-700 border-green-500 focus:outline-none focus:shadow-outline"
                    id="signupUsername" type="text" placeholder="Username" />
            </div>
            <div class="mb-4">
                <label class="block text-slate-200 text-sm font-bold mb-2" for="signupEmail">
                    Email
                </label>
                <input
                    class="shadow-lg border-2 rounded-full w-full py-2 px-3 text-gray-700 border-green-600 focus:outline-none focus:shadow-outline"
                    id="signupEmail" type="text" placeholder="Email" />
            </div>
            <div class="mb-4">
                <label class="block text-slate-200 text-sm font-bold mb-2" for="signupPassword">
                    Password
                </label>
                <input
                    class="shadow-lg border-2 rounded-full w-full py-2 px-3 text-gray-700 border-green-700 focus:outline-none focus:shadow-outline"
                    id="signupPassword" type="password" placeholder="Super Secret Password" />
            </div>
            <a href="/">
                <div class="flex items-center justify-center">
                    <button
                        class="transform transition duration-200 hover:scale-110 hover:shadow-md bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-4 px-6 mt-8 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign Up
                    </button>
                </div>
            </a>
        </form>
    </div>
}
export default SignupForm