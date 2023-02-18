import react from 'react'
import Plot from 'react-plotly.js'


function DailySpendingLineGraph() {
    var limit = 1000
    var dailySpending = [20, 50, 350, 10, 16, 24, 610]
    var acumulativeSpending = [20, 70, 420, 430, 446, 470, 1080]
    var budget = []

    for (let i = 0; i < dailySpending.length; i++) {
        budget = budget.concat(limit)
        
    }

    return (

        <Plot data={[
            {
                x: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'],
                y: budget,
                name: 'Budget Limit',
                type: 'scatter',
                mode: 'lines',
                line: { color: 'red'},
            },
            {
                x: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'],
                y: acumulativeSpending,
                name: 'Acumulative Spending',
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'green' },
            },
            {
                name: 'Daily Spending',
                type: 'bar',
                x: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'],
                y: dailySpending
            }
        ]}
            layout={{ autosize: true, title: 'Spuddy says you have spent this much!' }}
            id="test" className="graph"
        />
    )
}

export default DailySpendingLineGraph