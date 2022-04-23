import React from 'react'
import { storiesOf } from '@storybook/react';
import Iconlabel from './IconLabel';

storiesOf('UI/IconLabel', module)
  .add('default', () => (
    <Iconlabel icon='login' label='로그인' /> 
  ))
  .add('reversed', () => (
    <Iconlabel icon='login' label='로그인' reversed /> 
  ))
  .add('with button', () => (
    <button type='button' className='btn btn-primary'>
      <Iconlabel icon='login' label='로그인' /> 
    </button>
  ))
  .add('variable sizes', () => (<div>
    <div style={{ fontSize: '1em' }}>
      <h5>1em</h5>
      <Iconlabel icon='login' label='로그인' /> 
    </div>
    <div style={{ fontSize: '2em' }}>
      <h5>2em</h5>
      <Iconlabel icon='login' label='로그인' /> 
    </div>
    <div style={{ fontSize: '3em' }}>
      <h5>3em</h5>
      <Iconlabel icon='login' label='로그인' /> 
    </div>
  </div>));
