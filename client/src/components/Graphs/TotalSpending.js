import React from 'react'
import Plot from 'react-plotly.js'

 const value = TotalSpending.limit
 const limit = 3000
 const steps = []

 const greenLimit=.3*limit
 const yellowLimit=.5*limit
 const orangeLimit=.8*limit

 const chartSize = Math.max(value, limit)


function TotalSpending() {
    return (<Plot data={[
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: value,
            title: { text: "Spending" },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                bar:{color:'blue'},
              axis: { range: [null, chartSize] },
              steps: [
                { range: [0, greenLimit], color: "green" },
                { range: [greenLimit, yellowLimit], color: "yellow" },
                { range: [yellowLimit, orangeLimit], color: "orange" },
                { range: [orangeLimit, 10000], color: "red" },

              ],
              threshold: {
                line: { color: "black", width: 4 },
                thickness: 0.75,
                value: limit
              }
            }
          }
    ]}
    />)
}

export default TotalSpending