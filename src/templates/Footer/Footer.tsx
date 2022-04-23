import React from 'react';
import {useTranslation} from 'react-i18next';
import externalLinks from '../../assets/external-links.json';
import {Col, Row} from "react-bootstrap";
import {Typography} from "@components/Typography/Typography";

function Footer() {
    const {t} = useTranslation();

    return <footer className='footer'>
        <div className='container px-0'>
            <Typography className="company" size={14} label={'상호 : 주식회사 Q-Yours | 대표 : 홍길동  |  개인정보보호책임자 : 금동이'}/>
            <Row>
                <div className='d-flex flex-md-row justify-content-between'>
                    <Typography className="company" size={14} label={'주소 : 서울특별시 성북구 정릉로 77 국민대학교 북악관 1602호'}/>
                    <Typography className="company" size={14}
                                label={<>v <span className='fw-bold'>{process.env.REACT_APP_VERSION}</span></>}/>
                </div>
            </Row>
            <Row>
                <div className='d-flex flex-md-row justify-content-between'>
                    <Typography className="company" size={14} label={'대표 번호 : 070-000-0000 | 사업자등록번호 : 000-00-00000'}/>
                    <Typography size={14} label={<>
                        <a className='link px-4' href={externalLinks.privacy} target="_blank">{t('footer.privacy')}</a>
                        <a className='link' href={externalLinks.policy} target="_blank">{t('footer.term')}</a>
                    </>}/>
                </div>
            </Row>
        </div>
    </footer>;
}

export default Footer;



