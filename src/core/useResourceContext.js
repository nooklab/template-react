/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/03
 */


import {useContext} from "react";
import {ResourceContext} from "@core/ResourceContext";

export const useResourceContext = (props) => {
    const r = ResourceContext
    const context = useContext(ResourceContext);
    // return (props && props.resource) || context;
    return context
};
