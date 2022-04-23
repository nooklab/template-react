/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/04/20
 */


import React from 'react'
import { storiesOf } from '@storybook/react';
import Stepper from './Stepper';

const sampleStep = [{
    name: 'User Info',
    child: <h3 className="multisteps-form__title">Your User Info</h3>,
},{
    name: 'Address',
    child: <h3 className="multisteps-form__title">Your Address</h3>,
},{
    name: 'Info',
    child: <h3 className="multisteps-form__title">Your Info</h3>,
}, {
    name: 'Comments',
    child: <h3 className="multisteps-form__title">Your Comment</h3>,
}]

storiesOf('UI/Stepper', module)
    .add('normal', () => (<>
        <Stepper title="Badge Label" steps={sampleStep}/>
    </>));
