import React from 'react';
import Plot from 'react-plotly.js'


const MoneyDash = () => {
    return (
        <section className="p-5 bg-gradient-to-t from-lime-600 to-lime-500 ">
            <div className=" rounded-2xl border-4">
            {/* heading*/}
            <section className="flex flex-row items-center justify-center">
                <h1 className="m-5 p-5 text-3xl">Money Dashboard</h1>
            </section >


            {/* entire container for dashboard*/}
            <div className="xl:flex xl:flex-row sm:flex sm:flex-col">

                {/* large graph bar line combo with month selector*/}
                <div className="xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-1 xl:p-5 sm:m-1 sm:p-1 xl:flex sm:flex sm:flex-col sm:items-center">
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
                    <div id="graph">
                     
                        <Plot data={[
                            {
                            x:[10, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000],
                            y:['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'],
                            type:'scatter',
                            mode:'lines+markers',
                            marker:{color:'green'},
                        },
                        {type:'bar',x:[10, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000],
                        y:['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']}
                    ]}
                    layout={{autosize: true, title: 'Spuddy says you have spent this much!'}}
                    id="test" className="graph" 
                    />
                    </div>

                </div>

                {/* recent spending habits and graph selector*/}
                <div className="xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-1 xl:p-5 sm:m-1 sm:p-1 xl:flex sm:flex sm:flex-col sm:items-center">
                <h1>Recent Spending Habits</h1>
                <Plot data={[
                    {
                        values:[16, 15, 12, 6, 5, 4, 42],
                        labels: ["toll",
                        "food",
                        "parking",
                        "transport",
                        "accommodation",
                        "gasoline",
                        "telecom",
                        "miscellaneous"],
                        domain: {column: 0},
                        name: 'expense',
                        hoverinfo: 'label+percent+name',
                        hole: .4,
                        type: 'pie'
                    },
        
                ]}
                layout={{title:'Recent Spending Habits'}}
                 
                />
                </div>

                {/* spending money visual*/}
                <div className="xl:bg-slate-300 sm:bg-slate-500 rounded-3xl xl:border-4 xl:border-lime-500 xl:m-1 xl:p-5 sm:m-1 sm:p-1 xl:flex sm:flex sm:flex-col sm:items-center">
                <h1>Spending Tracker</h1>
                <div className=''>
                <Plot data={[
                    {
                        type:'indicator',
                        value: 1000,
                        dalta: {referace: 160},
                        guage:{ axis: { visible: false, range: [0, 250] }},
                        domain: { row: 0, column: 0 }
                    },
                    
                ]}
                layout={{ width: 600,
                    height: 400,
                    margin: {  },
                    grid: {  },
                    template:{
                        data:{
                            indicator: [
                                {
                                    title: {text: 'spending'},
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


            </div>
            </div>
        </section>
    )
}




export default MoneyDash;