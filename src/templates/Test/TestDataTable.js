/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/18
 */


import {DataTable, TableTextField} from "@components/DataTable";
import React from "react";
import _ from 'lodash'

export const tableSample = [
    {
        id: 1,
        name: '1번',
        count: 3,
        cost: 100,
    },

    {
        id: 2,
        name: '2번',
        count: 4,
        cost: 200,
    },

]

export const TestDataTable = props => {
    const {records, ...rest} = props

    function postRow(records) {
        return ['합계', '-', _.sumBy(records, 'count'), _.sumBy(records, 'cost')]
    }
    return <DataTable records={tableSample} postRow={postRow}>
        <TableTextField label="id" source={'id'}/>
        <TableTextField label="이름" source={'name'}/>
        <TableTextField label="인원" source='count'/>
        <TableTextField label="비용" source={'cost'}/>
    </DataTable>
}
