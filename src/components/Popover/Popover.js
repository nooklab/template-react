/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/06/28
 */


import Popup from "@components/Popup";
import React, {useEffect, useState} from "react";


export const Popover = (props) => {
    const {targetRef, placement = "top", children} = props
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.onclick = handleToggle
        }
    }, [targetRef])

    function handleToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <Popup
            targetRef={targetRef}
            placement={placement}
            isOpen={isOpen}
            onClickOutside={handleToggle}
            onClick={handleToggle}
        >
            {children}
        </Popup>
    )
}
