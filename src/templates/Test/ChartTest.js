import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js';
import 'chartjs-adapter-dayjs'
import {Line} from 'react-chartjs-2';

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/19
 */


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => (Math.random(1000))),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => (Math.random(1000))),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};


export const LineCharTest = props => {
    var timeFormat = 'YYYY-MM-DD';
    // type: 'line',
    const data2 = {
        // labels: ['1','2','3','4'],
        datasets: [
            {
                fill: false,
                label: 'test',
                data: [{
                    x: '2021-11-01',
                    // y: 50
                }, {
                    x: '2021-11-15',
                    y: 50
                }, {
                    x: '2021-11-10',
                    y: 60
                }, {
                    x: '2021-11-20',
                    y: 20
                }],
                borderColor: 'red'
        }],
    }
    const options2 = {
        // responsive: true,
        // scales: {
        //     xAxes: [{
        //         type: "time",
        //         time: {
        //             format: timeFormat,
        //             tooltipFormat: 'll'
        //         },
        //         scaleLabel: {
        //             display: true,
        //             labelString: 'Date'
        //         }
        //     }],
        //     yAxes: [{
        //         scaleLabel: {
        //             display:     true,
        //             labelString: 'value'
        //         }
        //     }]
        // }
        maintainAspectRatio: false,
        plugins: {
            title: {
                text: 'Chart.js Time Scale',
                display: true
            },
            legend: {
                position: 'right',
                labels: {
                    padding: 20,
                }
            },
        },

        scales: {
            // x: {
            //     type: 'time',
            //     time: {
            //         unit: "week",
            //         displayFormats: {
            //             minute: "MM D",
            //         }
            //         // format: 'YYYY-MM-DD'
            //         // Luxon format string
            //         // displayFormats: {
            //         //     quarter: 'MMM YYYY'
            //         // }
            //         // tooltipFormat: 'YYYY MMM D',
            //         // unit: '',
            //         // distribution: 'series'
            //     },
            //     title: {
            //         display: true,
            //         text: 'Date'
            //     },
            //
            // },
            // y: {
            //     title: {
            //         display: true,
            //         text: 'value'
            //     }
            // }
            x: {
                type: 'time',
                time: {
                    min: new Date(2022, 0, 1, 8, 0, 0),
                    max : new Date(2022, 0, 30, 21, 0, 0),
                    displayFormats: {
                        quarter: 'MMM YYYY'
                    }
                }
            }
        },
    }

    return <Line options={options2} data={data2}/>;
}


