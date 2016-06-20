'use strict';

import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import fetch from 'isomorphic-fetch';

import initialState from '../initial_state';

// Screen0 actions
const LOAD = 'ASYNC_YOUTUBE_QUERY';
const UPDATE = 'PROCESS_YOUTUBE_DATA';

// Screen0 reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD:
            return Object.assign({}, state, {
                isProcessingYoutubeQuery: true
            });

        case UPDATE:
            return Object.assign({}, state, {
                youtube: action.payload,
                isProcessingYoutubeQuery: false
            });

        default:
            return state;
    }
}
export default reducer;

// Screen0 action creators
export function fetchYoutubeData() {
    return { type: LOAD }
}

export function processYoutubeData(payload) {
    return { type: UPDATE, payload }
}

function fetchYoutubeApi() {
    const url = 'https://www.googleapis.com/youtube/v3/videos'
        + '?id=' + '-Icqx6bWLP4'
        + '&key=AIzaSyAhzNW9PKA12-pvU_2Aq8nIrjQeex7RixI'
        + '&fields=items(id,snippet(title,thumbnails))'
        + '&part=snippet';

    return fetch(url)
        .then(response => response.json());
}

// Screen0 sagas
export function* asyncYoutubeQuery() {
    const payload = yield call(fetchYoutubeApi);
    yield put(processYoutubeData(payload));
}

// Screen0 sagas watcher functions
export function* watchYoutubeQuery() {
    yield* takeEvery(LOAD, asyncYoutubeQuery);
}