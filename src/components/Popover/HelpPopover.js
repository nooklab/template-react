/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/06/28
 */

import React, {useRef} from "react";
import {Popover} from "@components/Popover/Popover";
import './Popover.scss'

/*
<span className="popover bs-popover-top" >
<div className="popover-header bs-popover-top">Disabled popover</div>
<div className="popover-body bs-popover-top">Disabled popover</div>
<div className="bs-popover-top popover-arrow"></div>
</span>
 */

export const HelpPopover = (props) => {
    const ref = useRef()
    return <>
        <i className="bi bi-question-circle" ref={ref}/>
        <Popover targetRef={ref}>
            {/*<div className="card" style={{"width": "18rem;"}}>*/}
            {/*    <img className="card-img-top" alt="..."/>*/}
            {/*    <div className="card-body">*/}
            {/*        <h5 className="card-title">Card title</h5>*/}
            {/*        <p className="card-text">Some quick example text to build on the card title and make up the bulk*/}
            {/*            of the card's content.</p>*/}
            {/*        <a href="#" className="btn btn-primary">Go somewhere</a>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <span className="popover helper">
                <div className="popover-body">{props.children}</div>
            </span>
        </Popover>
    </>
}
