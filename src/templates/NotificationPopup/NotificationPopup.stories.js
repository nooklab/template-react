import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import NotificationPopup from './NotificationPopup';

const mockNotifications = [
  {
    user: {
      name: 'baekjongwon'
    },
    message: '백종원 님이 생방송을 시작하였습니다!!',
    createdAt: '2020-02-02'
  },
  {
    message: '16:00 부터 서비스 점검 예정입니다!!',
    createdAt: '2020-02-01'
  }
];

storiesOf('Templates/NotificationPopup', module)
  .addDecorator(story => (
    <BrowserRouter>
      <div className='p-3'>
        {story()}
      </div>
    </BrowserRouter>
  ))
  .add('default', () => ( 
    <NotificationPopup
      items={mockNotifications}
    />
  ))
  .add('no items', () => ( 
    <NotificationPopup
      items={[]}
    />
  ));
  