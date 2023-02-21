import React, { useState } from 'react'
import DailySpendingLineGraph from "../components/Graphs/DailySpendingLineGraph"
import RecentSpendingPieChart from "../components/Graphs/RecentSpending/RecentSpendingPieChart"
import RecentSpendingLineChart from '../components/Graphs/RecentSpending/RecentSpendingLineChart';
import RecentSpendingBarChart from '../components/Graphs/RecentSpending/RecentSpendingBarChart';
import TotalSpending from "../components/Graphs/TotalSpending"
import { ADD_LIMIT } from '../utils/mutations';
import { useMutation } from '@apollo/client';
// import Auth from '../../utils/auth';


const MoneyDash = () => {
    const [limit, setLimit] = useState()
    function handleLimitChange(event) {
        setLimit(parseInt(event.target.value))

    }
    const [addLimit] = useMutation(ADD_LIMIT)
    const budgetLimit = async () => {
        console.log(limit)
        const { data } = await addLimit({
            variables: {
                amount: limit,
            },
        });

    }

    const [button, setButton] = useState('pie');

    function buttonPie() {
        setButton('pie')
    }
    function buttonLine() {
        setButton('line')
    }
    function buttonBar() {
        setButton('bar')
    }

    function recentSpending() {

        if (button === 'pie') {
            return <RecentSpendingPieChart />
        } else if (button === 'line') {
            return <RecentSpendingLineChart />
        } else if (button === 'bar') {
            return <RecentSpendingBarChart />
        }
    }

    return (
        <section className="flex flex-row flex-wrap items-center justify-center p-5 bg-gradient-to-t from-lime-600 to-lime-500 sm:bg-gradient-to-r sm:from-lime-400 sm:to-lime-700 sm:flex sm:flex-col sm:items-center sm:overflow-auto touch-auto">


            <div className="flex flex-col items-center justify-center bg-slate-100 rounded-2xl mb-5 p-5 shadow-xl">
                <h2 className="text-xl m-1">Enter spending limit here:</h2>
                <form className="">
                    <input className="bg-slate-300 rounded-full " onChange={handleLimitChange} type="number"></input>
                    <button onClick={budgetLimit} type="button" className='text-md p-2 m-1 bg-amber-400 rounded-full hover:bg-amber-200 hover:drop-shadow-lg hover:scale-[1.04] transition ease-out duration-300'>Submit</button>
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

                            <DailySpendingLineGraph />

                        </div>

                    </div>
                </container>

                <container className="flex flex-row flex-wrap  items-center justify-center">
                    <div className="xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-8 xl:p-8 sm:m-10 sm:p-10 xl:flex sm:flex sm:flex-col sm:items-center">
                        <h1>Recent Spending Habits</h1>
                        {recentSpending()}
                        <div>
                            <button onClick={buttonBar} className='bg-green-700 hover:scale-[1.04] transition ease-out duration-300 xl:hover:bg-yellow-600  hover:text-amber-400 hover:drop-shadow-lg rounded-3xl xl:m-5 xl:p-5 sm:m-10 sm:p-10'><h3>Bar</h3></button>
                            <button onClick={buttonPie} className='bg-green-700 hover:scale-[1.04] transition ease-out duration-300 xl:hover:bg-teal-600  hover:text-amber-400 hover:drop-shadow-lg rounded-3xl xl:m-5 xl:p-5 sm:m-10 sm:p-10'><h3>Pie</h3></button>
                            <button onClick={buttonLine} className='bg-green-700 hover:scale-[1.04] transition ease-out duration-300 xl:hover:bg-purple-600  hover:text-amber-400 hover:drop-shadow-lg rounded-3xl xl:m-5 xl:p-5 sm:m-10 sm:p-10'><h3>Line</h3></button>
                        </div>
                    </div>
                </container>


                <container className="flex flex-row flex-wrap  items-center justify-center">
                    <div className="xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-8 xl:p-8 sm:m-10 sm:p-10 xl:flex sm:flex sm:flex-col sm:items-center">
                        <h1>Spending Tracker</h1>
                        <div className=''>
                            <TotalSpending />
                        </div>

                    </div>
                </container>
            </div>

        </section>
    )
}




export default MoneyDash;