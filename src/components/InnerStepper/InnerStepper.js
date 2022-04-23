/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/02
 */


import {Button} from "bootstrap";
import {useEffect, useState} from "react";
import {useFormikContext} from "formik";

export const InnerStepper = (props) => {
    const formik = useFormikContext()
    const [selected, setSelected] = useState(0)
    const {children, refNext, refPrev, onPrevOutside, onNextOutside} = props

    useEffect(() => {
        if (refNext && refNext.current) {
            refNext.current.onclick = onNext
        }
        if (refPrev && refPrev.current) {
            refPrev.current.onclick = onPrev
        }
    }, [refNext, refPrev, selected, formik])

    function onPrev() {
        if (selected > 0) {
            setSelected(selected - 1)
        } else {
            if (onPrevOutside) {
                onPrevOutside()
            }
        }
    }

    function onNext() {
        const len = children.length
        if (selected + 1 < len) {
            setSelected(selected + 1)
        } else {
            if (onNextOutside) {
                onNextOutside()
            }
        }
    }

    return <>
        <div>
            {children[selected]}
        </div>
    </>
}



