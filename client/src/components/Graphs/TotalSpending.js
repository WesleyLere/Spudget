import react from 'react'
import Plot from 'react-plotly.js'

function TotalSpending() {
    return (<Plot data={[
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
    />)
}

export default TotalSpending