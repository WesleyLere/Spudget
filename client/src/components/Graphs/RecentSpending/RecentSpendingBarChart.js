import react from 'react'
import Plot from 'react-plotly.js'

function RecentSpendingBarChart() {
    return(
        <Plot
        data={[
            {
                x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                y: [1, 0, 3, 25, 80, 0, 10],
                width: .5,
                name: 'Toll',
                type: 'bar'
            },
            {
                x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                y: [0, 200, 10, 15, 100, 0, 0],
                width: .5,
                name: 'Food',
                type: 'bar'
            },
            {
                x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                y: [35, 0, 0, 6, 15, 0, 0],
                width: .5,
                name: 'Parking',
                type: 'bar'
            },
            {
                x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                y: [0, 25, 60, 45, 0, 55, 65],
                width: .5,
                name: 'Transport',
                type: 'bar'
            },
            {
                x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                y: [0, 0, 60, 0, 0, 0, 0],
                width: .5,
                name: 'Accomodation',
                type: 'bar'
            },
            {
                x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                y: [35, 0, 0, 0, 0, 15, 0],
                width: .5,
                name: 'Gasoline',
                type: 'bar'
            },
            {
                x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                y: [0, 200, 10, 15, 100, 0, 0],
                width: .5,
                name: 'Telecom',
                type: 'bar'
            },
            {
                x: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
                y: [0, 20, 100, 150, 10, 5, 5],
                width: .5,
                name: 'Micellaneous',
                type: 'bar'
            },
        ]}
        layout = {{bargap: .0, barmode: 'stack'}}
        
        />
    )
}

export default RecentSpendingBarChart