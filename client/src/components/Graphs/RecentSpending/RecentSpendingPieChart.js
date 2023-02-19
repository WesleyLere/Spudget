import React from 'react'
import Plot from 'react-plotly.js'

function RecentSpendingPieChart() {
    return (
        <Plot data={[
            {
                values: [16, 15, 12, 6, 5, 4, 42],
                labels: [
                    "toll",
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
    )
}

export default RecentSpendingPieChart