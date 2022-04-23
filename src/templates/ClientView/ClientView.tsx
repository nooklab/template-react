
import React from "react";
import Footer from "@templates/Footer";
import {Spacer2} from "@components/Layout";

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/15
 */


export const ClientView = props => {
    const {children} = props
    return <>
        <Spacer2 pt={60}/>
            {children}
        <Spacer2 pt={240}/>
    <Footer/>
    </>
}
