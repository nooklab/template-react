import React from 'react'
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

storiesOf('UI/Avatar', module)
  .add('variable sizes', () => (<>
    <Avatar size='2em' />
    <br />
    <Avatar size='3em' />
    <br />
    <Avatar size='4em' />
  </>));
