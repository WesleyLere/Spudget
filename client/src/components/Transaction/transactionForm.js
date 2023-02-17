import React from 'react'

function TransactionForm() {
    return (
        <>
            <form class="  shadow-lg px-8 pt-6 pb-8 mb-4 signUp-form" id='signUpForm'>

                <h1 className='text-slate-200 flex justify-center text-5xl'> Signup here!</h1>
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
                            class="transform transition duration-200 hover:scale-110 hover:shadow-md bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-4 px-6 mt-8 focus:outline-none focus:shadow-outline"
                            type="submit">
                            Sign Up
                        </button>
                    </div>
                </a>
            </form>
        </>
    )
}

export default TransactionForm