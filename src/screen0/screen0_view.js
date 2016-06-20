'use strict';

import React from 'react';

class Screen0 extends React.Component {
    render() {
        const { fetchYoutube } = this.props;
        return (
            <div>
                <p>I'm screen #0!</p>
                <button onClick={fetchYoutube}>YouTube API Call</button>
            </div>
        )
    }
}

export default Screen0;