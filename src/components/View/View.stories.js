import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import View from './View';

storiesOf('UI/View', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('horizontal', () => (
    <View root>
      <View fill>
        <div className='bg-secondary w-100'>FILL</div>
      </View>
      <div className='bg-light w-25'>SIDE</div>
    </View>
  ))
  .add('vertical', () => (
    <View root vertical>
      <div className='bg-light h-25'>TOP</div>
      <View fill>
        <div className='bg-secondary w-100'>FILL</div>
      </View>
    </View>
  ))
  .add('nested', () => (
    <View root vertical>
      <div className='bg-light h-25'>TOP</div>
      <View fill>
        <View fill>
          <div className='bg-secondary w-100'>FILL</div>
        </View>
        <div className='bg-info w-25'>SIDE</div>
      </View>
    </View>
  ));