'use strict';

import { watchYoutubeQuery } from './screen0/screen0_duck';
import { watchApiQuery } from './screen1/screen1_duck';

// Sagas watcher
function* rootSaga() {
    yield [
        watchApiQuery(),
        watchYoutubeQuery()
    ];
}

export default rootSaga;