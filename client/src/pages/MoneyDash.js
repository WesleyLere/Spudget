import React from 'react';

const MoneyDash = () => {
    return (
        <section className="p-5 bg-gradient-to-t from-lime-600 to-lime-500">
            <div className="rounded-2xl border-4">
            {/* heading*/}
            <section className="flex flex-row items-center justify-center">
                <h1 className="m-5 p-5 text-3xl">Money Dashboard</h1>
            </section >


            {/* entire container for dashbaord*/}
            <div className="">

                {/* large graph bar line combo with month selector*/}
                <div className="rounded-2xl shadow-xl bg-green-300">
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

                </div>

                {/* recent spending habits and graph selector*/}
                <div className="flex flex-row rounded-2xl shadow-xl bg-green-300">
                <h1>Recent Spending Habits</h1>
                </div>


                {/* spending money visual*/}
                <div className="">

                </div>


            </div>
            </div>
        </section>
    )
}



export default MoneyDash;