/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/04/20
 */
import React, {ReactHTMLElement, useState} from 'react';
import cn from "classnames";
import {Form, Formik} from "formik";
// import './script'

enum AnimationTypes {
    scaleIn = "scaleIn",
    scaleOut = "scaleOut",
    slideHorz = "slideHorz",
    slideVert = "slideVert",
    fadeIn = "fadeIn",

}

type StepItemProp = {
    name: string
    // child: ReactHTMLElement<any>
    child: any
    onNext?: Function
    onStep?: Function
}


type StepperProps = {
    title? : string
    steps: StepItemProp[]
    ani?: AnimationTypes

    onNext?: Function
    onStep?: Function

}

// const steps = [{
//     key: 1,
//     name: 'User Info',
//     child: <h3 className="multisteps-form__title">Your User Info</h3>,
// },{
//     key: 2,
//     name: 'Address',
//     child: <h3 className="multisteps-form__title">Your Address</h3>,
//     // title: 'Your Address',
// },{
//     key: 3,
//     name: 'Info',
//     child: <h3 className="multisteps-form__title">Your Info</h3>,
//     // title: 'Your Info',
// }, {
//     key: 4,
//     name: 'Comments',
//     child: <h3 className="multisteps-form__title">Your Comment</h3>,
//     // title: 'Your Comment',
// }]


const Stepper = (props: StepperProps) => {
    const {title, steps, ani = AnimationTypes.scaleIn, onNext, onStep} = props
    const [selected, setSelected] = useState(0)
    const stepBar = steps


    const onStepBarClick = (e: any /* React.MouseEvent */) => {
        const index = e.target.getAttribute("data-index")
        setSelected(index)
    }

    const onClickNext = (e: any) => {
        if (selected < steps.length - 1) {
            setSelected(selected + 1)
            // 현재 스템의 onNext 호출
            const step = steps[selected]
            if (step.onNext) {
                step.onNext(selected)
            }
        }
    }

    const onClickPrev= (e: any) => {
        if (selected > 0) {
            setSelected(selected - 1)
            if (onNext) {
                onNext(selected)
            }
        }
    }

    // const formHeight = (activePanel) => {
    //
    //     const activePanelHeight = activePanel.offsetHeight;
    //
    //     DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
    //
    // };
    //
    // const setFormHeight = () => {
    //     const activePanel = getActivePanel();
    //
    //     formHeight(activePanel);
    // }


    // const setActiveStep = (activeStepNum) => {
    //
    //     //remove active state from all the state
    //     removeClasses(DOMstrings.stepsBtns, 'js-active');
    //
    //     //set picked items to active
    //     DOMstrings.stepsBtns.forEach((elem, index) => {
    //
    //         if(index <= (activeStepNum) ) {
    //             elem.classList.add('js-active');
    //         }
    //
    //     });
    // };

    // console.log(`render = ${selected}`)
    return (
        <div className="stepper content__inner">
            {/*<div className="container">*/}
                {/*<!--content title-->*/}
            {title ? <h2 className=" content__title">{title}</h2> : ''}
            {/*</div>*/}
            <div className=" container overflow-hidden">
                {/*   multisteps-form*/}
                <div className="multisteps-form">
                    {/*   progress bar*/}
                    <div className="row">
                        <div className="col-12 col-lg-8 ml-auto mr-auto mb-4">
                            <div className="multisteps-form__progress" >
                                {/*</button>*/}
                                {steps.map((step, index) => (
                                        <button key={index.toString()}
                                                data-index={index}
                                                className={cn("multisteps-form__progress-btn", (index <= Number(selected)) && "js-active")}
                                                type="button"
                                                onClick={onStepBarClick}
                                                title={step.name}>{step.name}</button>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    {/*   form panels*/}
                    <div className="row">
                        <div className="col-12 col-lg-8 m-auto">
                            {/*<Formik  initialValues={{}} onSubmit={() => {}}>*/}
                            {/*<Form className="multisteps-form__form">*/}
                            <div className="multisteps-form__form">
                                {/*   single form panel*/}
                                {steps.map((step, index) => {
                                    return <div
                                        key={index.toString()}
                                        className={cn("multisteps-form__panel shadow p-4 rounded bg-white", (index === Number(selected)) && "js-active")}
                                        data-animation={ani}>
                                        {step.child}
                                        <div className="button-row d-flex mt-4">
                                            <button className="btn btn-secondary ml-auto js-btn-prev"
                                                    type="button"
                                                    onClick={onClickPrev}
                                                    title="Prev">Prev
                                            </button>
                                        </div>
                                        <div className="button-row d-flex mt-4">
                                            <button className="btn btn-primary ml-auto js-btn-next"
                                                    type="button"
                                                    onClick={onClickNext}
                                                    title="Next">Next
                                            </button>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Stepper
