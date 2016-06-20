'use strict';

import { combineReducers } from 'redux';

import screen0Reducer from './screen0/screen0_duck';
import screen1Reducer from './screen1/screen1_duck';

const rootReducer = combineReducers({
    screen0Reducer,
    screen1Reducer
});

export default rootReducer;