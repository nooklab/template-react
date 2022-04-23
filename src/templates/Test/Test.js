import React, {Component, useContext, useEffect, useRef, useState} from "react";
import './Test.scss'
import $ from 'jquery'
import Avatar from "@components/Avatar";
// import PopupIconButton from "@components/PopupIconButton";

import ReactTooltip from 'react-tooltip';
import {TableTextField, DataTable, TableFunctionField} from "@components/DataTable";
import { useCountUp } from 'react-countup';
// import Modal from "@components/Modal";
import {Button, Col, Modal, Row, Toast, ToastContainer} from "react-bootstrap";
// import {Link} from 'react-router-dom'
import dayJs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import {ToastContainerEx, useToast} from "@components/Toast";
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
// import ReactPaginate from 'react-paginate';
// import { HashLink } from 'react-router-hash-link';
// import {Pagination2} from "@templates/Test/TestPagination";
// import {tableSample, TestDataTable} from "@templates/Test/TestDataTable";
// import {BarChart} from "@components/Chart";
// import {BarChartTest, BumpChartTest, LineCharTest} from "@templates/Test/ChartTest";
import {AlertTest, ModalTest} from "@templates/Test/ModalsTest";
dayJs.extend(relativeTime)





const card = <form className="row g-3">
    <div className="row g-3">
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">캠페인 요약</label>
        </div>
    </div>
    <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
    </div>
    <div className="row g-3">
        <div className="">
            {/*<label htmlFor="inputEmail4" className="form-label">Budget</label>*/}
            <button type="button" className="btn btn-primary">캠페인 신청</button>
        </div>
    </div>
</form>


const checkout = () => {
    return <>

    </>
}


const commonProperties = {
    width: 900,
    height: 400,
    margin: {top: 20, right: 20, bottom: 60, left: 80},
    // data,
    animate: true,
    enableSlices: 'x',
}


const Popover = (props) => {

    // selfRef: HTMLSpanElement;
    const selfRef = useRef()

    useEffect(() => {
        $(selfRef).popover({
            container: selfRef,
            placement: "auto",
            title: props.popoverTitle,
            content: props.popoverContent,
        });
    }, [])

    // componentDidMount(): void{
    //     $(this.selfRef).popover({
    //         container: this.selfRef,
    //         placement: "auto",
    //         title: this.props.popoverTitle,
    //         content: this.props.popoverContent,
    //     });
    // }


    // @ts-ignore
    return <span ref={selfRef} data-toggle="popover">
      {props.children}
    </span>;
}


// function TopNavUserButton({avatarSrc, title, menu}) {
//     return <PopupIconButton menu={menu}>
//         <Avatar src={avatarSrc} size='29px'/>
//         <span className='top-nav-user-button__title'>{title}</span>
//     </PopupIconButton>
// }


const NewNavUserButton = props => {
    const {title, avatarSrc} = props
    // return <><a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
    //             data-bs-toggle="dropdown" aria-expanded="false">
    //     <Avatar src={avatarSrc} size='29px'/>
    //     <span className='top-nav-user-button__title'>{title}</span>
    // </a>
    //     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    //         <li><a className="dropdown-item" href="/logout">Logout</a></li>
    //         {/*<li><a className="dropdown-item" href="#">Another action</a></li>*/}
    //         {/*<li><a className="dropdown-item" href="#">Something else here</a></li>*/}
    //     </ul>
    // </>
    return <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
}


const HelpPopover = props => {
    const {children} = props
    useEffect(() => {
        // const x = $('[data-toggle="popover"]')
        // if (x) {
        //     x.popover({
        //         placement: 'top',
        //         trigger: 'hover',
        //         html: true,
        //         content: '<div class="media"><img src="images/avatar-tiny.jpg" class="mr-3" alt="Sample Image"><div class="media-body"><h5 class="media-heading">Jhon Carter</h5><p>Excellent Bootstrap popover! I really love it.</p></div></div>'
        //     });
        // }
    }, [])

    function onClick() {

    }

    const ref = useRef()
    return <>
        {/*<i className="bi bi-question-circle" onClick={onClick} ref={ref}/>*/}
        {/*<a tabIndex="0" className="btn btn-lg btn-danger" role="icon" data-bs-toggle="popover" data-bs-trigger="focus"*/}
        {/*<a tabIndex="0" className="icon" role="icon" data-bs-toggle="popover" data-bs-trigger="focus"*/}
        {/*   title="Dismissible popover" data-bs-content={children}>Dismissible*/}
        {/*    popover</a>*/}
        {/*<a href="#" data-toggle="popover" data-img="http://placehold.it/400x200" title="Popover Header" >Toggle popover</a>*/}
        <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top"
                title="Tooltip on top">
            Tooltip on top
        </button>
    </>
}

const HelpTooltip = props => {
    const {children} = props
    return <>
        <ReactTooltip effect='solid'>
            {children}
        </ReactTooltip>
        <i className="bi bi-question-circle" data-tip/>
    </>
}


const DataTableSample = props => {
    const list = [
        {
            id: 1,
            name: 'NAME1',
            title: "HELLO1"
        },
        {
            id: 2,
            name: 'NAME2',
            title: "HELLO2"
        }
    ]

    return <DataTable records={list}>
        <TableTextField label="id" source={'id'}/>
        <TableTextField label="name" source={'name'}/>
        <TableFunctionField label="name" render={record => record.title}/>
        <button type="button"
                className={"btn btn-bl-primary"}
        >상세보기
        </button>
    </DataTable>
}



const CompleteHook = () => {
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: 1234567,
        delay: 0,
        duration: 5,
        onReset: () => console.log('Resetted!'),
        onUpdate: () => console.log('Updated!'),
        onPauseResume: () => console.log('Paused or resumed!'),
        onStart: ({ pauseResume }) => console.log(pauseResume),
        onEnd: ({ pauseResume }) => console.log(pauseResume),

        // preserveValue: false,
        formattingFn: (value => {
            console.log(value)
            return `${value/10}`
        }),

    });
    return (
        <div>
            <div style={{color: 'red'}} ref={countUpRef} />
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={pauseResume}>Pause/Resume</button>
            <button onClick={() => update(2000)}>Update to 2000</button>
        </div>
    );
};



export const Test2 = () => {

    // useEffect(() => {
    // }, [])

    function handleHideModal() {
        // this.setState({view: {showModal: false}})

    }


    function onClick() {
        // const myModal = new Modal(document.getElementById('alertModalContainer'), {
        //     keyboard: false
        // })
        // myModal.show()
    }

    return <>
        <NewNavUserButton title={'1234'} />
        <DataTableSample />
        {/*<ModalTest handleHideModal={handleHideModal}/>*/}
        <button onClick={onClick}>1111</button>

        <CompleteHook/>

    </>


}



const ToastItem = props => {
    const {title, msg} = props
    const [time, setTime] = useState(dayJs());
    const h = dayJs(time).fromNow()
    const [show, setShow] = useState(true);
    return <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header closeButton={true} >
            <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>{h}</small>
        </Toast.Header>
        <Toast.Body>{msg}</Toast.Body>
    </Toast>
}

function ExampleToast() {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
    // const [show, setShow] = useState(true);
    const [toastList, setToastList] = useState([])

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    // function onClick() {
    //     setShow(true)
    // }

    function addToast() {
        // const index = toastList.length + 1;
        // toastList.push({
        //     show: true,
        //     title: "TITLE",
        //     msg: "Message"
        // })
        // setToastList([...toastList])
        toastList.push(<ToastItem msg={'HELLO'}/>)
        setToastList([...toastList])
    }

    // function closeToast(index) {
    //     const target = toastList.find(t => t.index === index);
    //     if (target) {
    //         target.show = false
    //     }
    //     setToastList([...toastList])
    // }

    return (
        <Row>
            <Button onClick={addToast}>Toast</Button>
            <ToastContainer className="p-3" position={'bottom-end'}>
                {/*<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>*/}
                {/*    <Toast.Header closeButton={true} >*/}
                {/*        <img*/}
                {/*            src="holder.js/20x20?text=%20"*/}
                {/*            className="rounded me-2"*/}
                {/*            alt=""*/}
                {/*        />*/}
                {/*        <strong className="me-auto">Bootstrap</strong>*/}
                {/*        <small>11 mins ago</small>*/}
                {/*    </Toast.Header>*/}
                {/*    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>*/}
                {/*</Toast>*/}
                {/*{toastList.map(t => {*/}
                {/*    const {index, title, msg, show} = t;*/}
                {/*    return <Toast key={index} onClose={() => closeToast(index)} show={show} delay={3000} autohide>*/}
                {/*        <Toast.Header closeButton={true} >*/}
                {/*            <img*/}
                {/*                src="holder.js/20x20?text=%20"*/}
                {/*                className="rounded me-2"*/}
                {/*                alt=""*/}
                {/*            />*/}
                {/*            <strong className="me-auto">Bootstrap</strong>*/}
                {/*            <small>11 mins ago</small>*/}
                {/*        </Toast.Header>*/}
                {/*        <Toast.Body>{msg}</Toast.Body>*/}
                {/*    </Toast>*/}
                {/*})}*/}
                {toastList.map((t, index) => (
                    <div key={index}>{t}</div>
                ))}
            </ToastContainer>
        </Row>
    );
}

const ExampleToast2 = props => {
    const toast = useToast()
    function addToast() {
        toast.add({
            title: "TITLE",
            msg: "HELLO"
        })
    }
    return <>
        <Button onClick={addToast}>Add Toast</Button>
        <ToastContainerEx />
    </>
}


function downloadURL() {
    const fileURL = 'https://resource-bloglink.s3.ap-northeast-2.amazonaws.com/doc/%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%E1%84%8F%E1%85%B3_%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5.pdf';
    // fetch('https://cors-anywhere.herokuapp.com/' + fileURL, {
    fetch(fileURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/pdf',
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                `블로그링크(소개서).pdf`,
            );

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
        });
}


const FABExample = props => {
    const components = [
        {
            position: {
                bottom: 0,
                left: 0,
            },
            event: 'hover',
            alwaysShowTitle: true,
            mainButtonStyles: {
                backgroundColor: '#27ae60',
            },
            actionButtonStyles: {
                backgroundColor: '#16a085',
            },
        },
        {
            position: {
                top: 0,
                right: 0,
            },
            event: 'click',
            mainButtonStyles: {
                backgroundColor: '#9b59b6',
            },
            actionButtonStyles: {
                backgroundColor: '#8e44ad',
            },
        },
        {
            position: {
                top: 0,
                left: 0,
            },
            event: 'hover',
            mainButtonStyles: {
                backgroundColor: '#95a5a6',
                color: '#34495e',
            },
            actionButtonStyles: {
                backgroundColor: '#696969',
                color: '#27ae60',
            },
        },
        {
            position: {
                bottom: 0,
                right: 0,
            },
            event: 'click',
            mainButtonStyles: {
                backgroundColor: '#e74c3c',
            },
            actionButtonStyles: {
                backgroundColor: '#ffffff',
                color: '#34495e',
            },
        },
    ];
    const c = components[1]

    function onMainClick() {
        console.log("Clicked")
    }
    return <Fab
        mainButtonStyles={c.mainButtonStyles}
        // actionButtonStyles={actionButtonStyles}
        // style={style}
        icon={"?"}
        // event={event}
        // alwaysShowTitle={true}
        onClick={onMainClick}
    >
        {/*// The Action components are the "buttons" that appear when the Fab is open. You can use the out-of-the-box Action*/}
        {/*// component or you can use a custom component of any type and style it any way that you'd like. The "text" prop*/}
        {/*// is the popup label that appears when the Action component is hovered.*/}
        {/*<Action*/}
        {/*    text="Email"*/}
        {/*    onClick={handleEmailOnClick}*/}
        {/*/>*/}
        {/*<Action*/}
        {/*    text="Help"*/}
        {/*    onClick={handleHelpOnClick}*/}
        {/*>*/}
        {/*    <i className="fa fa-help" />*/}
        {/*</Action>*/}
        {/*// Using a custom component for this one. See another example in "example/src/index.js"*/}
        {/*<SomeCustomComponent*/}
        {/*    text="Foobar!"*/}
        {/*    onClick={handleTheFooBarOnClick}*/}
        {/*>*/}
        {/*    <i className="fa fa-foo-bar-fa-foo" />*/}
        {/*</SomeCustomComponent>*/}
    </Fab>
}

const ListTest = props => {
    const {value} = props
    useEffect(() => {
        console.log('changed', value)
    }, [value])
    console.log('rendered')
    return <div>
        {value.count}
    </div>
}

export const Test = () => {

    const [val, setVal] = useState({
        count : 0
    })
    const value = {
        count : 0
    }

    function onClick(ev) {
        value.count = value.count + 1
        val.count = val.count + 1
        console.log('clicked', val)
        // setVal(Object.assign({}, {
        //     count : val.count + 1
        // }))
        // setVal({
        //     count : val.count + 1
        // })
    }

    return <>
        {/*<NewNavUserButton title={'1234'} />*/}
        {/*<DataTableSample />*/}

        <ModalTest />
        {/*<ExampleToast/>*/}
        <ExampleToast2 />
        {/*<CompleteHook/>*/}
        <button onClick={downloadURL}>download</button>
        {/*<HashLink to={'/#question'} smooth>QUESTION</HashLink>*/}
        {/*<FABExample />*/}
        {/*<Pagination2 />*/}

        <ListTest value={val}/>
        <button onClick={onClick}>click</button>

        {/*<TestDataTable />*/}

        {/*<div style={{width: '75%', height: '200px'}}>*/}
        {/*    <LineCharTest />*/}
        {/*</div>*/}

        <AlertTest />
    </>
}

