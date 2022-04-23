/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/11/12
 */

import {Link, useHistory} from 'react-router-dom'
import {Spacer2} from "@components/Layout";
import {Typography} from "@components/Typography/Typography";

export const Error404 = props => {
    const history = useHistory()
    function goBack() {
        history.goBack()
    }
    return (
        <>
            <Spacer2 pt={200}/>
            <Typography size={34} center bold color={'#a27329'} label={'죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다'}/>
            <Spacer2 pt={60}/>
            <Typography size={20} center label={'존재하지 않는 주소를 입력하셨거나,'}/>
            {/*<Spacer2 pt={20}/>*/}
            <Typography size={20} center label={'요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다'}/>
            {/*<Spacer2 pt={20}/>*/}
            <Typography size={20} center label={'문의사항이 있으시면 언제든 고객센터를 통해 문의해 주시기 바랍니다'}/>
            <Spacer2 pt={60}/>
            <div className='d-flex justify-content-center'>
            <Link className='btn-lg btn-primary mx-3' to={'/'}>메인으로</Link>
            <button className='btn btn-lg btn-secondary' onClick={goBack}>이전페이지</button>
            </div>
        </>
    )
}
