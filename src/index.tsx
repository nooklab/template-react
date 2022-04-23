import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import reportWebVitals from './reportWebVitals';
import App from './App';
import './firebase/firebaseSetup';
import './yupSetup';
import './i18n';
import './index.scss';

const browserHistory = createBrowserHistory();




ReactDOM.render(
    <Router history={browserHistory}>
            <App/>
    </Router>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
