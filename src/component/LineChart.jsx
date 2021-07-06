import React from "react";
import { Line } from 'react-chartjs-2';

const LineChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June',],
        dataset: [
            {
                label : 'Covid-19 last 7 months of 2021',
                data : [1000000000, 2000000000, 2000000000, 3000000000, 2000000000, 1000000000, 500000000]
            }
        ]
    }

    return <Line data={data} />
}

export default LineChart;