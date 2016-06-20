'use strict';

import { connect } from 'react-redux';

import component from './screen0_view';
import { fetchYoutubeData } from './screen0_duck';

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchYoutube: () => dispatch(fetchYoutubeData())
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

export default connectedComponent;