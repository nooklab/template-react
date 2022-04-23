/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/19
 */


// import React from 'react';
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
import {Line} from 'react-chartjs-2';


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





export const RankChart2 = props => {
    // const timeFormat = 'YYYY-MM-DD';
    const {title, data, maxRank = 15} = props

    // 상위 rank 를 위쪽으로 표시하기 위해서, 데이터를 뒤집는다
    const fixedData = {
        datasets: data.datasets.map((item => {
            return {
                ...item,
                data: item.data.map(v => ({
                    x: v.x,
                    y: maxRank - v.y,
                }))
            }
        }))
    }

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
                    boxWidth: 20,
                    // padding: 20,
                },
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            // label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            label += (maxRank - context.parsed.y)
                        }
                        return label;
                    }
                }
            }
        },
        elements: {
            line: {
                tension: 0.2,
            },
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
            },
            y: {
                ticks : {
                    callback: (label, index, labels) => {
                        const l = (maxRank - (Number(label) - 1))
                        return l < 1 ? '' : l
                    }
                },
                max: maxRank + 1,
                min: 1,
            }
        },

    }

    return <Line options={options} data={fixedData}/>;
}


