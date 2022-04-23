/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/04/20
 */


import React from 'react'
import { storiesOf } from '@storybook/react';
import KeywordForm from "./KeywordForm";
import {action} from "@storybook/addon-actions";
import {BrowserRouter} from "react-router-dom";

storiesOf('UI/Keyword', module)
    .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
    .addDecorator(story => <div className='container'>{story()}</div>)
    .add('form', () => (
        <KeywordForm
            onSubmit={action('onSubmit')}
        />
        )
    );
