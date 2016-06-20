'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import Screen0 from './screen0/screen0_container';
import Screen1 from './screen1/screen1_container';

// App body
ReactDOM.render(
    <div>
        <Screen0 store={store} />
        <Screen1 store={store} />
    </div>,
    document.getElementById('root')
);