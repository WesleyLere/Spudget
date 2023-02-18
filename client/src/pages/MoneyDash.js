import React from 'react';
import DailySpendingLineGraph from "../components/Graphs/DailySpendingLineGraph"
import RecentSpendingPieChart from "../components/Graphs/RecentSpending/RecentSpendingPieChart"
import RecentSpendingLineChart from '../components/Graphs/RecentSpending/RecentSpendingLineChart';
import RecentSpendingBarChart from '../components/Graphs/RecentSpending/RecentSpendingBarChart';
import TotalSpending from "../components/Graphs/TotalSpending"



const MoneyDash = () => {
    


    return (
        <section className="flex flex-row flex-wrap items-center justify-center p-5 bg-gradient-to-t from-lime-600 to-lime-500 sm:bg-gradient-to-r sm:from-lime-400 sm:to-lime-700 sm:flex sm:flex-col sm:items-center sm:overflow-auto touch-auto">


            <div className="flex flex-col items-center justify-center bg-slate-100 rounded-2xl mb-5 p-5 shadow-xl">
                <h2 className="text-xl m-1">Enter spending limit here:</h2>
            <form className="">
                <input className="bg-slate-300 rounded-full " type="text"></input>
                <button className='text-md p-2 m-1 bg-amber-400 rounded-full hover:bg-amber-200 hover:drop-shadow-lg hover:scale-[1.04] transition ease-out duration-300'>
                        <input className="cursor-pointer" type="button" value="Submit"/>
                    </button>
            </form>
            </div>
            
            
            <div className="flex flex-row flex-wrap  items-center justify-center rounded-2xl border-4 shadow-2xl">


                <container className='flex flex-row flex-wrap items-center justify-center '>
                    <div className="inner-shadow-2xl xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-8 xl:p-8 sm:m-10 sm:p-10 xl:flex sm:flex sm:flex-col sm:items-center">
                        <div className="">
                            <h2 className="">
                                This Months Spending:
                                <select className="" id="month" name="month">
                                    <option>month</option>
                                    <option value="january">January</option>
                                    <option value="february">February</option>
                                    <option value="march">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="august">August</option>
                                    <option value="september">September</option>
                                    <option value="october">October</option>
                                    <option value="november">November</option>
                                    <option value="december">December</option>
                                </select>
                            </h2>
                        </div>
                        <div className="sm:overflow-auto touch-auto sm:touch-pan-down sm:m-10 sm:p-10" id="graph">

                        <DailySpendingLineGraph/>
                           
                        </div>

                    </div>
                </container>
                
                <container className="flex flex-row flex-wrap  items-center justify-center">
                    <div className="xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-8 xl:p-8 sm:m-10 sm:p-10 xl:flex sm:flex sm:flex-col sm:items-center">
                        <h1>Recent Spending Habits</h1>
                        <RecentSpendingLineChart/>
                        <div>
                            <button  className='bg-green-700 hover:scale-[1.04] transition ease-out duration-300 xl:hover:bg-yellow-600  hover:text-amber-400 hover:drop-shadow-lg rounded-3xl xl:m-5 xl:p-5 sm:m-10 sm:p-10'><h3>Bar</h3></button>
                            <button  className='bg-green-700 hover:scale-[1.04] transition ease-out duration-300 xl:hover:bg-teal-600  hover:text-amber-400 hover:drop-shadow-lg rounded-3xl xl:m-5 xl:p-5 sm:m-10 sm:p-10'><h3>Pie</h3></button>
                            <button  className='bg-green-700 hover:scale-[1.04] transition ease-out duration-300 xl:hover:bg-purple-600  hover:text-amber-400 hover:drop-shadow-lg rounded-3xl xl:m-5 xl:p-5 sm:m-10 sm:p-10'><h3>Line</h3></button>
                        </div>
                    </div>
                </container>
              

                <container className="flex flex-row flex-wrap  items-center justify-center">
                    <div className="xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-8 xl:p-8 sm:m-10 sm:p-10 xl:flex sm:flex sm:flex-col sm:items-center">
                        <h1>Spending Tracker</h1>
                        <div className=''>
                            <TotalSpending/>
                        </div>

                    </div>
                </container>
            </div>

        </section>
    )
}




export default MoneyDash;