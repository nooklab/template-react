import React from 'react'
import { storiesOf } from '@storybook/react';
import SectionDivider from './SectionDivider';

storiesOf('UI/SectionDivider', module)
  .addDecorator(story => <div className='p-3'>{story()}</div>)
  .add('default', () => (<>
    <div>긴 밤 지새우고 풀잎마다 맺힌 진주보다 고운 아침이슬처럼</div>
    <SectionDivider />
    <div>내 맘에 설움이 알알이 맺힐때 아침동산에 올라 작은 미소를 지운다.</div>
  </>));
