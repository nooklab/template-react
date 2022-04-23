import React, { useState } from 'react'
import { storiesOf } from '@storybook/react';
import Switch from './Switch';

function SwitchControl({ defaultValue = false, disabled }) {
  const [value, setValue] = useState(defaultValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return <Switch value={value} onChange={handleChange} disabled={disabled} />;
}

storiesOf('UI/Switch', module)
  .add('default', () => <>
    <p className='m-2'>
      <SwitchControl defaultValue={false} />
    </p>
    <p className='m-2'>
      <SwitchControl defaultValue={true} />
    </p>
  </>)
  .add('disabled', () => <>
    <p className='m-2'>
      <SwitchControl defaultValue={false} disabled />
    </p>
    <p className='m-2'>
      <SwitchControl defaultValue={true} disabled />
    </p>
  </>);
