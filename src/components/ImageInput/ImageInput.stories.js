import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ImageInput from './ImageInput';

storiesOf('UI/ImageInput', module)
  .add('default', () => (
    <p className='p-2'>
      <ImageInput value='' onChange={action('onChange')} />
    </p>
  ));
