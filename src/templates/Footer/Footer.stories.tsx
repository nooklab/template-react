import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';

storiesOf('Templates/Footer', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('default', () => (
    <Footer />
  ));
