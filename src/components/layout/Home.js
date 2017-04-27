import React from 'react';
import Zones from '../containers/Zones';
import Comments from '../containers/Comments';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Yak Yik!</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Zones />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                </div>
            </div>
        )
    }
}