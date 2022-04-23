/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/06
 */

import {Fab} from "react-tiny-fab";
import React from "react";
// import QuestionIcon from "@assets/images/questionIcon.png";

const QuestionIcon = props => {
    return <div>마케팅 문의</div>
}

export const FABQuestion = props => {
    const style =
        {
            position: {
                bottom: 0,
                right: 0,
            },
            event: 'click',
            mainButtonStyles: {
                backgroundColor: '#19DE66',
            },
            actionButtonStyles: {
                backgroundColor: '#ffffff',
                color: '#34495e',
            },
        }
    // const c = components[1]

    function onMainClick() {
    //     console.log("Clicked")
    }

    return <Fab
        mainButtonStyles={style.mainButtonStyles}
        // actionButtonStyles={actionButtonStyles}
        // style={style}
        icon="?"
        // icon={<QuestionIcon/>}
        // event={event}
        // alwaysShowTitle={true}
        // onClick={onMainClick}
        // alwaysShowTitle={true}
    >
        {/*<QuestionIcon/>*/}
    </Fab>
}
