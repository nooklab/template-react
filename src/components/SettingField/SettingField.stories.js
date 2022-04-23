import React from 'react'
import { storiesOf } from '@storybook/react';
import SettingFieldGroup from './SettingFieldGroup';
import SettingField from './SettingField';
import Switch from '../Switch';

storiesOf('UI/SettingField', module)
  .addDecorator(story => <div className='row'><div className='col-6 p-4'>{story()}</div></div>)
  .add('default', () => (
    <SettingFieldGroup header='방송국'>
      <SettingField label='방송키'>
        <input className='form-control' type='text' />
      </SettingField>
      <SettingField label='방송 저장' help='최대 1주일간 지난 방송을 저장합니다.'>
        <Switch />
      </SettingField>
    </SettingFieldGroup>
  ))
  .add('errors', () => (
    <SettingFieldGroup header='방송국'>
      <SettingField label='방송키' error='방송키를 받아올 수 없습니다.'>
        <input className='form-control' type='text' />
      </SettingField>
      <SettingField label='방송 저장' help='최대 1주일간 지난 방송을 저장합니다.' error='서버가 응답하지 않습니다. 잠시 뒤에 시도해주세요.'>
        <Switch />
      </SettingField>
    </SettingFieldGroup>
  ));
