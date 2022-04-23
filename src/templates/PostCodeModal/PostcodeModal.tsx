import React, { useState } from 'react';
// import TextInput from '../../components/TextInput';
// import Select from '../../components/Select';
// import CommonModal from "@components/CommonModal/CommonModal";
// import { object, number, string } from 'yup';
import {useTranslation} from "react-i18next";
import DaumPostcode from "react-daum-postcode";
// import Modal from "@components/Modal";
import {Modal} from "react-bootstrap";

const PostcodeModal = (props) => {
  // const statusList = Object.values(Campaign_Status)
  const {data, isOpen, onClose, onComplete} = props
  const { t } = useTranslation();
  // const items: any = [
  //   {
  //     component: Select,
  //     label: 'Campaign.status',
  //     name: 'status',
  //     initialValues: data.status,
  //     // validationScheme: {},
  //     moreProp: {
  //       data: {
  //         values: statusList
  //       }
  //     }
  //   },
  //   {
  //     component: TextInput,
  //     label: 'Campaign.memo',
  //     name: 'memo',
  //     initialValues: data.memo,
  //     moreProp: {
  //       rows: 3
  //     }
  //   }
  // ]

  // const validationScheme = object().shape({
  //   memo: string().required(t('validation.required')),
  // })

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      // fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    if (onComplete) {
      onComplete(data, extraAddress)
    }
  }

  // const validationScheme = object().shape({
  //   memo: string().required(t('validation.required')),
  // })

  return <Modal show={isOpen} onHide={onClose}>
    <Modal.Body>
    <DaumPostcode
        onComplete={handleComplete}
    />
    </Modal.Body>
  </Modal>



}

export default PostcodeModal;
