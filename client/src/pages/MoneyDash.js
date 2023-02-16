import React from 'react';
import Plot from 'react-plotly.js'


const MoneyDash = () => {
    return (
        <section className="flex flex-row flex-wrap items-center justify-center p-5 bg-gradient-to-t from-lime-600 to-lime-500 sm:bg-gradient-to-r sm:from-lime-400 sm:to-lime-700 sm:flex sm:flex-col sm:items-center sm:overflow-auto touch-auto">

            <div className="flex flex-row flex-wrap  items-center justify-center rounded-2xl border-4">

                <container className='flex flex-row flex-wrap items-center justify-center '>
                    <div className="xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-8 xl:p-8 sm:m-10 sm:p-10 xl:flex sm:flex sm:flex-col sm:items-center">
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

                            <Plot data={[
                                {
                                    x: [10, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000],
                                    y: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'],
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    marker: { color: 'green' },
                                },
                                {
                                    type: 'bar', x: [10, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000],
                                    y: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
                                }
                            ]}
                                layout={{ autosize: true, title: 'Spuddy says you have spent this much!' }}
                                id="test" className="graph"
                            />
                        </div>

                    </div>
                </container>

                <container className="flex flex-row flex-wrap  items-center justify-center">
                    <div className="xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-8 xl:p-8 sm:m-10 sm:p-10 xl:flex sm:flex sm:flex-col sm:items-center">
                        <h1>Recent Spending Habits</h1>
                        <Plot data={[
                            {
                                values: [16, 15, 12, 6, 5, 4, 42],
                                labels: ["toll",
                                    "food",
                                    "parking",
                                    "transport",
                                    "accommodation",
                                    "gasoline",
                                    "telecom",
                                    "miscellaneous"],
                                domain: { column: 0 },
                                name: 'expense',
                                hoverinfo: 'label+percent+name',
                                hole: .4,
                                type: 'pie'
                            },

                        ]}
                            layout={{ title: 'Recent Spending Habits' }}

                        />
                        <div>
                            <button className='bg-green-700 hover:scale-[1.04] transition ease-out duration-300 xl:hover:bg-yellow-600  hover:text-amber-400 hover:drop-shadow-lg rounded-3xl xl:m-5 xl:p-5 sm:m-10 sm:p-10'><h3>Bar</h3></button>
                            <button className='bg-green-700 hover:scale-[1.04] transition ease-out duration-300 xl:hover:bg-teal-600  hover:text-amber-400 hover:drop-shadow-lg rounded-3xl xl:m-5 xl:p-5 sm:m-10 sm:p-10'><h3>Pie</h3></button>
                            <button className='bg-green-700 hover:scale-[1.04] transition ease-out duration-300 xl:hover:bg-purple-600  hover:text-amber-400 hover:drop-shadow-lg rounded-3xl xl:m-5 xl:p-5 sm:m-10 sm:p-10'><h3>Line</h3></button>
                        </div>
                    </div>
                </container>

                <container className="flex flex-row flex-wrap  items-center justify-center">
                <div className="xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-8 xl:p-8 sm:m-10 sm:p-10 xl:flex sm:flex sm:flex-col sm:items-center">
                        <h1>Spending Tracker</h1>
                        <div className=''>
                            <Plot data={[
                                {
                                    type: 'indicator',
                                    value: 1000,
                                    dalta: { referace: 160 },
                                    guage: { axis: { visible: false, range: [0, 250] } },
                                    domain: { row: 0, column: 0 }
                                },

                            ]}
                                layout={{
                                    width: 600,
                                    height: 400,
                                    margin: {},
                                    grid: {},
                                    template: {
                                        data: {
                                            indicator: [
                                                {
                                                    title: { text: 'spending' },
                                                    mode: "number+delta+gauge",
                                                    delta: { reference: 90 }
                                                }
                                            ]
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </container>
            </div>

        </section>
    )
}




export default MoneyDash;