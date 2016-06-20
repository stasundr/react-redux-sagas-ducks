'use strict';

import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import fetch from 'isomorphic-fetch';

import initialState from '../initial_state';

// Screen1 actions
const LOAD = 'ASYNC_API_QUERY';
const UPDATE = 'PROCESS_DATA_FROM_API';

// Screen1 reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD:
            return Object.assign({}, state, {
                isLoading: true
            });

        case UPDATE:
            return Object.assign({}, state, {
                isLoading: false,
                data: action.payload
            });

        default:
            return state;
    }
}
export default reducer;

// Screen1 action creators
export function fetchApiData() {
    return { type: LOAD }
}

export function processApiData(payload) {
    return { type: UPDATE, payload }
}

function fetchMyApiData() {
    const url = 'http://localhost:3000/api/data';

    return fetch(url);
}

// Screen1 sagas
export function* asyncApiQuery() {
    const payload = yield call(fetchMyApiData);
    yield put(processApiData(payload));
}

// Screen1 sagas watcher functions
export function* watchApiQuery() {
    yield* takeEvery(LOAD, asyncApiQuery);
}