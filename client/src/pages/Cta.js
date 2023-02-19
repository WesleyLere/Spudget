import React from 'react';
import sampleGraph from '../images/samplegraph.png';
import Phone from '../images/phone.png';
import Savings from '../images/savings.png';
import Spuddy from '../images/Spuddy.png';
import HappyFamily from '../images/Happyspouses.jpg';
import logo from '../images/logo.png';


const Cta = () => {
    return (
        <section className='sm:w-auto xl:w-auto'>
           <div className="bg-slate-300 p-5 shadow-inner flex flex-col items-center text-center justify-start">
                <h1 className='drop-shadow-xl sm:text-xl sm:m-1 sm:p-5 xl:text-8xl xl:font-bold xl:m-8 xl:p-5 flex flex-wrap text-center justify-start text-slate-400'>This is SPUDGET.<br></br>Your one stop spending and budgeting app.</h1>
            </div>
            <div className='w-full h-1/4 xl:p-20 xl:h-screen sm:p-5 xl:bg-gradient-to-t from-lime-600 to-lime-500 xl:flex xl:flex-row xl:items-center xl:justify-center'>

                <div className="w-full h-3/4 xl:object-cover xl:bg-slate-300 xl:hover:bg-slate-100 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-5 xl:p-5 sm:m-1 sm:p-1 hover:drop-shadow-xl hover:scale-[1.04] transition ease-out duration-300 sm:flex sm:flex-col sm:items-center xl:mx-auto xl:max-w-6xl">
                    <h2 className="sm:text-2xl xl:text-center xl:text-4xl sm:text-center xl:mt-5 xl:pt-5 sm:m-1 sm:p-1">Keep Track of your Spending</h2>
                    <div className="xl:m-5 xl:p-5 sm:m-10 sm:p-10">
                        <img className="w-full h-3/4" src={sampleGraph} alt="sample graph"></img>
                    </div>
                </div>

                <div className="w-full h-3/4 xl:object-cover xl:bg-slate-300 xl:hover:bg-slate-100 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-5 xl:p-5 sm:m-1 sm:p-1 hover:drop-shadow-xl hover:scale-[1.04] transition ease-out duration-300 sm:flex sm:flex-col sm:items-center xl:mx-auto xl:max-w-6xl">
                    <h2 className="sm:text-2xl xl:text-center xl:text-4xl sm:text-center xl:mt-5 xl:pt-5 sm:m-1 sm:p-1">Import your Reciepts!</h2>
                    <div className="xl:m-5 xl:p-5 sm:m-10 sm:p-10">
                        <img className="w-full h-3/4" src={Phone} alt="sample graph"></img>
                    </div>
                </div>

                <div className="w-full h-3/4 xl:object-cover xl:bg-slate-300 xl:hover:bg-slate-100 sm:bg-slate-400 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-5 xl:p-16 sm:m-1 sm:p-1 hover:drop-shadow-xl hover:scale-[1.04] transition ease-out duration-300 sm:flex sm:flex-col sm:items-center xl:mx-auto xl:max-w-6xl">
                    <h2 className="sm:text-2xl xl:text-center xl:text-4xl sm:text-center xl:mt-5 xl:pt-5 sm:m-1 sm:p-1">Watch your savings grow!</h2>
                    <div className="xl:m-5 xl:p-5 sm:m-10 sm:p-10">
                        <img className="w-full h-3/4" src={Savings} alt="sample graph"></img>
                    </div>
                </div>

                <div className="w-full h-3/4 xl:object-cover xl:bg-slate-300 xl:hover:bg-slate-100 sm:bg-slate-400 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-10 xl:p-5 sm:m-1 sm:p-1 hover:drop-shadow-xl hover:scale-[1.04] transition ease-out duration-300 sm:flex sm:flex-col sm:items-center xl:mx-auto xl:max-w-6xl">
                    <h2 className="sm:text-2xl xl:text-center xl:text-4xl sm:text-center xl:mt-5 xl:pt-5 sm:m-1 sm:p-1">We Also Have a Potato as a Mascot.<br></br> His name is Spuddy</h2>
                    <div className="xl:m-5 xl:p-5 sm:m-10 sm:p-10">
                        <img className="w-full h-3/4 xl:mt-30 xl:mb-5 xl:p-10 xl:hover:rotate-6" src={Spuddy} alt="sample graph"></img>
                    </div>
                </div>

            </div>
            <div className="bg-slate-200 p-5 shadow-inner flex flex-col items-center text-center justify-start">
                <h1 className='drop-shadow-xl sm:text-xl sm:m-1 sm:p-5 xl:text-8xl xl:font-bold xl:m-8 xl:p-5 flex flex-wrap text-center justify-start text-slate-400'>Used By Companies and People all over the World</h1>
            </div>



            <React.Fragment>
                <div className='xl:bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400'>
                    <div className="">
                       
                        <div className='xl:flex xl:justify-between xl:flex-row sm:flex sm:flex-wrap'>

                            <h2 className="xl:m-10 xl:p-5 sm:m-1 sm:p-1 text-4xl sm:text-lime-500 xl:text-lime-50 xl:flex sm:flex sm:justify-center">Google</h2>
                            <h2 className="xl:m-10 xl:p-5 sm:m-1 sm:p-1 text-4xl sm:text-lime-500 xl:text-lime-50 xl:flex sm:flex sm:justify-center">NY Times</h2>
                            <h2 className="xl:m-10 xl:p-5 sm:m-1 sm:p-1 text-4xl sm:text-lime-500 xl:text-lime-50 xl:flex sm:flex sm:justify-center">WellsFargo</h2>
                            <h2 className="xl:m-10 xl:p-5 sm:m-1 sm:p-1 text-4xl sm:text-lime-500 xl:text-lime-50 xl:flex sm:flex sm:justify-center">Target</h2>
                            <h2 className="xl:m-10 xl:p-5 sm:m-1 sm:p-1 text-4xl sm:text-lime-500 xl:text-lime-50 xl:flex sm:flex sm:justify-center">Sony</h2>
                            <h2 className="xl:m-10 xl:p-5 sm:m-1 sm:p-1 text-4xl sm:text-lime-500 xl:text-lime-50 xl:flex sm:flex sm:justify-center">Microsoft</h2>
                        </div>
                    </div>
                </div>
            </React.Fragment>


            <React.Fragment>
                <div className='xl:bg-gradient-to-r from-stone-400 via-stone-300 to-stone-400 xl:w-auto'>
                    <div className='xl:flex sm:flex sm:flex-col xl:flex-row xl:items-center xl:justify-center'>
                        <div className="flex flex-row">
                            <img className='xl:m-10 xl:p-5 xl:shadow-xl md:m-10 md:p-5 sm:rounded-full' src={HappyFamily} alt='happy family using spudget'></img>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="m-5 p-5 text-3xl font-bold sm:text-slate-700 xl:text-slate-100 drop-shadow-xl">All of your Spending in one place!</h2>
                            <h2 className="m-5 p-5 text-3xl font-bold sm:text-slate-700 xl:text-slate-100 drop-shadow-xl">Graphs that update in real time to show exactly<br></br>how much your spending</h2>
                            <h2 className="m-5 p-5 text-3xl font-bold sm:text-slate-700 xl:text-slate-100 drop-shadow-xl">Get notified before reacurring transactions!</h2>
                            <h2 className="m-5 p-5 text-3xl font-bold sm:text-slate-700 xl:text-slate-100 drop-shadow-xl">Grow your Spuds with us!</h2>
                        </div>
                    </div>

                </div>

            </React.Fragment>

            <React.Fragment>
                <section className='text-2xl bg-gradient-to-b from-lime-600 to-lime-500'>
                    <div className='xl:flex xl:flex-row xl:justify-evenly md:flex md:flex-row md:justify-evenly'>
                        <div className='xl:flex xl:justify-center'>
                            <img className='xl:p-5 xl:m-5 md:flex md:flex-row md:justify-evenly' src={logo} alt=''></img>
                        </div>
                        <div className='m-10 p-10 flex flex-col items-center justify-center'>
                            <h2 className='flex-1 text-white'>Contact Us</h2>
                            <h3 className='flex-1'>625 Potato Ave. Spuddy, ID 11123</h3>
                        </div>
                        <div className='m-10 p-10 flex flex-col items-center justify-center'>
                            <h2 className='flex-1 text-white'>Get the App</h2>
                            <h3 className='flex-1 hover:text-lime-100 cursor-pointer'>App Store</h3>
                            <h2 className='flex-1 hover:text-lime-100 cursor-pointer'>Play Store</h2>
                        </div>

                        <div className='m-10 p-10 flex flex-col items-center justify-center'>
                            <h2 className='flex-1 text-white'>Stay Connected</h2>
                            <ul className='p-'>
                                <li className='hover:text-lime-100 cursor-pointer'>Instagram</li>
                                <li className='hover:text-lime-100 cursor-pointer'>TikTok</li>
                                <li className='hover:text-lime-100 cursor-pointer'>Twitter</li>
                                <li className='hover:text-lime-100 cursor-pointer'>Facebook</li>
                            </ul>
                            <p>
                                Copyright © 2023 Spudget, LLC
                                All rights reserved.
                            </p>
                        </div>

                    </div>
                </section>
            </React.Fragment>
        </section>
    )
}

export default Cta; 