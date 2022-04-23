/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/19
 */


import React from 'react';
// import {
//     Chart as ChartJS,
//     // CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     TimeScale,
// } from 'chart.js';
// import 'chartjs-adapter-dayjs'
// import {Line} from 'react-chartjs-2';
//
//
// ChartJS.register(
//     // CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     TimeScale
// );

import {Line} from 'react-chartjs-2';



export const LineChar2 = props => {
    const timeFormat = 'YYYY-MM-DD';
    const {title, data} = props

    const options = {
        maintainAspectRatio: false,
        plugins: {
            title: {
                position: 'left',
                text: title,
                display: !!title
            },
            legend: {
                position: 'right',
                labels: {
                    padding: 20,
                },
            },
        },
        elements: {
            point: {
                // backgroundColor: 'black',
            }
        },

        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    displayFormats: {
                        quarter: 'MMM YYYY'
                    }
                }
            }
        },
    }

    return <Line options={options} data={data}/>;
}


