import React from 'react'
import Plot from 'react-plotly.js'

function RecentSpendingLineChart() {
    
    return(<Plot data={[
        {
            x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            y: [1, 0, 3, 25, 80, 0, 10],
            mode: 'lines+markers',
            name: 'Toll',
            line: {shape: 'Toll'},
            type: 'scatter'
        },
        {
            x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            y: [0, 19.50, 10, 54.90, 100, 0, 0],
            mode: 'lines+markers',
            name: 'Food',
            line: {shape: 'Food'},
            type: 'scatter'
        },
        {
            x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            y: [35, 0, 0, 6, 15, 0, 0],
            mode: 'lines+markers',
            name: 'Parking',
            line: {shape: 'Parking'},
            type: 'scatter'
        },
        {
            x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            y: [0, 25, 60, 45, 0, 55, 65],
            mode: 'lines+markers',
            name: 'Transport',
            line: {shape: 'Transport'},
            type: 'scatter'
        },
        {
            x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            y: [0, 0, 60, 0, 0, 0, 0],
            mode: 'lines+markers',
            name: 'Accomodation',
            line: {shape: 'Accomodation'},
            type: 'scatter'
        },
        {
            x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            y: [35, 0, 0, 0, 0, 15, 0],
            mode: 'lines+markers',
            name: 'Gasoline',
            line: {shape: 'Gasoline'},
            type: 'scatter'
        },
        {
            x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            y: [0, 200, 10, 15, 100, 0, 0],
            mode: 'lines+markers',
            name: 'Telecom',
            line: {shape: 'Telecom'},
            type: 'scatter'
        },
        {
            x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            y: [0, 20, 100, 150, 10, 5, 5],
            mode: 'lines+markers',
            name: 'Micellaneous',
            line: {shape: 'Micellaneous'},
            type: 'scatter'
        },
        ]}
        layout={{ legend: {
            y: 0.5,
            traceorder: 'reversed',
            font: {size: 16},
            yref: 'paper'
          }}}
        />
    )
}

export default RecentSpendingLineChart