/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/12
 */

import React from "react";
import {Section} from "@components/Section/Section";


export const BigIconView = (props) => {
    const {src, children, title, textList = [], detail} = props

    return <>
        <div className="row campaign-inspection">
            <figure className="figure">
                <img src={src} className="center-block d-block mx-auto" alt=""/>
            </figure>
        </div>
        <div className="d-flex justify-content-center">
            <div className="campaign-inspection__title">{title}</div>
        </div>
        {
            textList.map(text => {
                return <div key={text} className="d-flex justify-content-center">
                    <div className="campaign-inspection__text">{text}</div>
                </div>
            })
        }
        {detail ? <div className="d-flex justify-content-center">
            <Section border={true}>
                {detail.map(text => {
                    return <div key={text} className="d-flex justify-content-center">
                        <div className="campaign-inspection__text">{text}</div>
                    </div>
                })}
            </Section>
        </div> : ''}
        {children}
    </>
}
