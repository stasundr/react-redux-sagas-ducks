'use strict';

import { connect } from 'react-redux';

import component from './screen1_view';
import { fetchApiData } from './screen1_duck';

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchApiData())
    }
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(component);

export default connectedComponent;