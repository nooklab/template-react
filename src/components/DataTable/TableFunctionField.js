

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/20
 */

import React from "react";

export const TableFunctionField = props => {
    const {record, render} = props
    return <>
        {render(record)}
    </>
}
