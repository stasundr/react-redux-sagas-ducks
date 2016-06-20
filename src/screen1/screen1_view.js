'use strict';

import React from 'react';

class Screen1 extends React.Component {
    render() {
        const { fetchData } = this.props;
        return (
            <div>
                <p>I'm screen #1!</p>
                <button onClick={fetchData}>Native API Call</button>
            </div>
        )
    }
}

export default Screen1;