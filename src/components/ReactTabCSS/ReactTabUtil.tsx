/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/15
 */

import React from "react";
import {TabPanel} from "react-tabs";


export const TabTitle = props => {
    const {index, tabIndex, title, icon, selectedIcon} = props
    return <>
        {tabIndex === index ? <img src={selectedIcon} className='tab-title-icon'/> : <img src={icon} className='tab-title-icon'/>}
    {title}
    </>
}


export const TabPanelEx = props => {
    const {children} = props
    return <TabPanel>
            {children}
        </TabPanel>

}
