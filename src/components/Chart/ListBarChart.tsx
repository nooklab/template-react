

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/25
 */


import * as React from "react";
import _ from 'lodash'
// import {BarChart} from "@components/Chart/BarChart";

const data = [
    {
        "country": "AD",
        "hot dog": 190,
        "hot dogColor": "hsl(219, 70%, 50%)",
        "burger": 132,
        "burgerColor": "hsl(340, 70%, 50%)",
        "sandwich": 143,
        "sandwichColor": "hsl(292, 70%, 50%)",
        "kebab": 146,
        "kebabColor": "hsl(197, 70%, 50%)",
        "fries": 110,
        "friesColor": "hsl(2, 70%, 50%)",
        "donut": 193,
        "donutColor": "hsl(126, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 83,
        "hot dogColor": "hsl(287, 70%, 50%)",
        "burger": 84,
        "burgerColor": "hsl(173, 70%, 50%)",
        "sandwich": 165,
        "sandwichColor": "hsl(300, 70%, 50%)",
        "kebab": 145,
        "kebabColor": "hsl(322, 70%, 50%)",
        "fries": 49,
        "friesColor": "hsl(223, 70%, 50%)",
        "donut": 28,
        "donutColor": "hsl(165, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 186,
        "hot dogColor": "hsl(286, 70%, 50%)",
        "burger": 5,
        "burgerColor": "hsl(138, 70%, 50%)",
        "sandwich": 25,
        "sandwichColor": "hsl(174, 70%, 50%)",
        "kebab": 121,
        "kebabColor": "hsl(316, 70%, 50%)",
        "fries": 187,
        "friesColor": "hsl(273, 70%, 50%)",
        "donut": 176,
        "donutColor": "hsl(73, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 104,
        "hot dogColor": "hsl(29, 70%, 50%)",
        "burger": 170,
        "burgerColor": "hsl(239, 70%, 50%)",
        "sandwich": 27,
        "sandwichColor": "hsl(40, 70%, 50%)",
        "kebab": 72,
        "kebabColor": "hsl(321, 70%, 50%)",
        "fries": 166,
        "friesColor": "hsl(291, 70%, 50%)",
        "donut": 63,
        "donutColor": "hsl(336, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 129,
        "hot dogColor": "hsl(11, 70%, 50%)",
        "burger": 30,
        "burgerColor": "hsl(88, 70%, 50%)",
        "sandwich": 8,
        "sandwichColor": "hsl(312, 70%, 50%)",
        "kebab": 164,
        "kebabColor": "hsl(26, 70%, 50%)",
        "fries": 132,
        "friesColor": "hsl(156, 70%, 50%)",
        "donut": 131,
        "donutColor": "hsl(256, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 65,
        "hot dogColor": "hsl(336, 70%, 50%)",
        "burger": 176,
        "burgerColor": "hsl(358, 70%, 50%)",
        "sandwich": 40,
        "sandwichColor": "hsl(24, 70%, 50%)",
        "kebab": 107,
        "kebabColor": "hsl(351, 70%, 50%)",
        "fries": 6,
        "friesColor": "hsl(96, 70%, 50%)",
        "donut": 108,
        "donutColor": "hsl(30, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 0,
        "hot dogColor": "hsl(357, 70%, 50%)",
        "burger": 8,
        "burgerColor": "hsl(142, 70%, 50%)",
        "sandwich": 148,
        "sandwichColor": "hsl(240, 70%, 50%)",
        "kebab": 175,
        "kebabColor": "hsl(164, 70%, 50%)",
        "fries": 10,
        "friesColor": "hsl(194, 70%, 50%)",
        "donut": 23,
        "donutColor": "hsl(166, 70%, 50%)"
    }
]


// export const ListBarChart = props => {
//     // const {convert, name = 'undefined', color = "hsl(227,70%,50%)"} = props
//     // const {records, empty} = props
//     //
//     // function buildChart(data) {
//     //     if (!data) {
//     //         return []
//     //     }
//     //     const chartList = []
//     //     let pointList = []
//     //     for (const [index, item] of Object.entries(data)) {
//     //         const pointArrayResult = convert(item, index, {filterValues: {}})
//     //         pointList.push(...pointArrayResult)
//     //     }
//     //     if (pointList.length > 0) {
//     //         pointList = _.sortBy(pointList, 'x')
//     //
//     //         const dataSet = {
//     //             id: name,
//     //             color,
//     //             data: pointList
//     //         }
//     //         chartList.push(dataSet)
//     //     }
//     //     return chartList
//     // }
//     //
//     // const chartList = buildChart(records)
//
//
//     return <>
//         <BarChart data={data} empty={''}/>
//     </>
// }
