/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/25
 */


import * as React from "react";
import _ from 'lodash'
// import {BumpChart} from "@components/Chart/BumpChart";
import './RankChart.scss'

const data = [
    {
        "id": "Serie 1",
        "data": [
            {
                "x": 2000,
                "y": 8
            },
            {
                "x": 2001,
                "y": 6
            },
            {
                "x": 2002,
                "y": 1
            },
            {
                "x": 2003,
                "y": 5
            },
            {
                "x": 2004,
                "y": 8
            }
        ]
    },
]


export const ListBumpChart = props => {
    // const {convert, name = 'undefined', color = "hsl(227,70%,50%)"} = props
    const {records, empty} = props
    //
    // function buildChart(data) {
    //     if (!data) {
    //         return []
    //     }
    //     const chartList = []
    //     let pointList = []
    //     for (const [index, item] of Object.entries(data)) {
    //         const pointArrayResult = convert(item, index, {filterValues: {}})
    //         pointList.push(...pointArrayResult)
    //     }
    //     if (pointList.length > 0) {
    //         pointList = _.sortBy(pointList, 'x')
    //
    //         const dataSet = {
    //             id: name,
    //             color,
    //             data: pointList
    //         }
    //         chartList.push(dataSet)
    //     }
    //     return chartList
    // }
    //
    // const chartList = buildChart(records)


    return <>
        {/*<BumpChart data={data} empty={''}/>*/}
    </>
}


export const RankListBumpChart = props => {
    const {records, empty} = props
    return <>
        <div className="rank-chart">
            {/*<BumpChart data={records} empty={''}/>*/}
        </div>
    </>
}
