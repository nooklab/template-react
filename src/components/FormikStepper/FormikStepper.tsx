import {Form, Formik, FormikConfig, FormikValues} from "formik";
import React, {useState} from "react";
import {Button, CircularProgress, Grid, Step, StepIcon, StepLabel, Stepper} from "@material-ui/core";
// import { StepIcon } from "material-ui/Stepper";
import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';
import './FormikStepper.scss'

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/04/25
 * ref: https://codesandbox.io/s/k5m5po380v?file=/index.js
 */

const styles = theme => ({
    root: {
        color: "blue",
        "&$active": {
            color: "green"
        },
        "&$completed": {
            color: "red"
        }
    },
    active: {},
    completed: {}
});

const useStyles = makeStyles({
    stepper: {
        // background: '#c7ecee'
    },
    step: {
        // background: '#c7ecee'
        completed: {
            color: "lightgreen"
        },
        active: {
            color: "pink"
        },
    },
    stepIcon: {
        color: "pink",
        active: 'pink'
    },
    content: {
        padding: '30px',
        width: '100%',
        height: '200px',
        background: '#dff9fb'
    },
    button: {
        padding: '30px',
        width: '100%',
        height: '30px',
        background: '#c7ecee'
    }
});

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
});


const styles2 = makeStyles({
    root: {
        color: "blue",
        "&$active": {
            color: '#23E36E'
        },
        "&$completed": {
            color: '#000000'
        }
    },
    active: {},
    completed: {}
});

function CustomStepIcon(props) {
    //const classes = useQontoStepIconStyles();
    const classes = styles2();
    const { active, completed, icon } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {/*{completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}*/}
            {active ? <StepIcon active icon={icon} classes={classes}/> : completed ? <StepIcon completed icon={icon} classes={classes}/> : <StepIcon icon={icon} />}
        </div>
    );
}


export interface FormikStepProps
    extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
    label: string;
    next?: string;
}

export function FormikStep({ children }: FormikStepProps) {
    return <>{children}</>;
}


export function FormikStepper( stepperProps: any) {
    const {children, schemaArray, initialValues, onNextStep, onSubmit} = stepperProps
    const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    // const {schemaArray} = props
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);
    const maxStep = childrenArray.length - 1
    const isLastStep = step === maxStep
    const classes = useStyles();


    async function handleSubmit(formikBag) {
        console.log(formikBag)
        // submission 종료
        const {values, submitForm} = formikBag
        if (onNextStep) {
            await onNextStep(step + 1, values)
        }
        if (onSubmit) {
            await onSubmit(values, formikBag);
        }
        formikBag.setSubmitting(false)
        setCompleted(true);
    }

    async function handleNext(props) {
        // props.setSubmitting(true)
        // props.submitForm().then(() => {
        props.validateForm().then(async (err) => {
            const {values, isValid, helpers} = props
            if (Object.keys(err).length === 0) {
                console.log(values)
                setStep(Math.min(step + 1, maxStep))
                props.validateForm();
                props.setTouched({});
                if (onNextStep) {
                    await onNextStep(step + 1, values)
                }
            } else {
                props.setTouched({...err});
            }
        });
        // props.setSubmitting(false)
    }

    async function handlePrev(props) {
        setStep((s) => s - 1)
    }

    return (
        <Formik
            // validationSchema={currentChild.props.validationSchema}
            initialValues={initialValues}
            validationSchema={schemaArray[step]}
            onSubmit={handleSubmit}
        >
            {(formikProps) => (
                <Form autoComplete="off">
                    <Stepper className={classes.stepper} alternativeLabel activeStep={step}>
                        {childrenArray.map((child, index) => (
                            <Step
                                key={index}
                                className={classes.step}
                                completed={step > index || completed}
                            >
                                <StepLabel
                                    StepIconComponent={CustomStepIcon}
                                    >{child.props.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {currentChild}

                    <Grid container spacing={2}>
                        {step > 0 ? (
                            <Grid item>
                                <button type='button'
                                        disabled={formikProps.isSubmitting}
                                        className='btn btn-dark'
                                        onClick={handlePrev}>
                                    이전으로
                                </button>
                            </Grid>
                        ) : null}
                        <Grid item>
                            {isLastStep ?
                                <button type='button' disabled={formikProps.isSubmitting} className='btn btn-bl-primary' onClick={() => handleSubmit(formikProps)}>
                                    {currentChild.props.next || "전송하기"}
                                </button> :
                                <button type='button' disabled={formikProps.isSubmitting} className='btn btn-bl-primary' onClick={() => handleNext(formikProps)}>
                                    {currentChild.props.next || "다음으로"}
                                </button>
                            }
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}
