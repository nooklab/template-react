import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CentralView from '../CentralView';
import RegisterForm from './RegisterForm';

storiesOf('Templates/RegisterForm', module)
  .addDecorator(story => <div className='container'>
    <CentralView>{story()}</CentralView>
  </div>)
  .add('default', () => (
    <RegisterForm
      onSubmit={action('onSubmit')}
      onSocialLogIn={action('onSocialLogin')}
      onCheckId={action('onCheckId')}
    />
  ));
