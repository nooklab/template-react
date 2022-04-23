import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {Field} from 'formik'


function _Select(prop: any) {
  const {name, data} = prop
  // function handleCheckboxChange() {
  //   if (onChange && !disabled) {
  //     onChange({
  //       target: {
  //         name,
  //         value: !value
  //       }
  //     });
  //   }
  // }

  const items = data.values || []

  return <>
    <Field component="select" name={name} className="form-select" aria-label="Default select example">
      {
        items.map((op: string, index) => (<option key={op} value={op} >{op}</option>))
      }
    </Field>
  </>
}


export default _Select;
