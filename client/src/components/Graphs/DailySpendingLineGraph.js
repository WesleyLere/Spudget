import React, { useEffect } from 'react'
import Plot from 'react-plotly.js'
    
function DailySpendingLineGraph({limitAmount, dailySpending, accumulativeSpending}) {
    const dailyArr = dailySpending.map((spending) => spending.amount)
    const accArr = accumulativeSpending.map((spending) => spending.amount)
    const dayArr = dailySpending.map((spending) => spending.date)
    const limits = [];
    for (let i = 0; i < dailySpending.length; i++) {
        limits.push(limitAmount)
    }
    return (

        <Plot data={[
            
            {
                x: dayArr,
                y: limits,
                name: 'Budget Limit',
                type: 'scatter',
                mode: 'lines',
                line: { color: 'red'},
            },
            {   
                x: dayArr,
                y: accArr,
                name: 'Acumulative Spending',
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'blue' },
            },
            {
                name: 'Daily Spending',
                type: 'bar',
                x: dayArr,
                y: dailyArr,
                bar: { color: 'blue' }
            }
        ]}
            layout={{ autosize: true, title: 'Spuddy says you have spent this much!' }}
            id="test" className="graph"
        />
    )
}

export default DailySpendingLineGraph