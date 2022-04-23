import React, {useEffect} from "react";
import './Home.scss'
import Footer from "../../templates/Footer";
import View from "@components/View";
import {useGetIdentity} from "@core/auth";
import {useStateContext} from "../../state/StateContext";
import {STATE_ACTION} from "../../state/actions/action";


export const Home = () => {

    const {identity} = useGetIdentity()
    const fieldRef = React.useRef<HTMLInputElement>(null);
    // const userType = identity ? identity.type : ''
    const {dispatch} = useStateContext()


    useEffect(() => {
        dispatch({
            type: STATE_ACTION.QUESTION_REF,
            state: {
                questionRef: fieldRef
            }
        })
    }, [fieldRef.current])

    return <View vertical fill scrollable>
        {/*{userType === 'blogger' ? <HomeBlogger/> : userType === 'advertiser' ? <HomeAdvertiser/> :*/}
            <>
                <Footer/>
            </>
        {/*}*/}
    </View>;
}
