import React from 'react'
import { storiesOf } from '@storybook/react';
import LoadingBox from './LoadingBox';

storiesOf('UI/LoadingBox', module)
  .add('default', () => (
    <p className='p-2'>
      <LoadingBox />
    </p>
  ));
