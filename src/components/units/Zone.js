// presentational (preview) component - literally shows the data
import React from 'react';
import style from './styles'

export default class Zone extends React.Component {
    render() {
        const styles = style.zone;
        const zipCode = this.props.currentZone.zipCodes[0];
        return (
            <div style={styles.container}>
                <h2 style={styles.header}>
                    <a style={styles.title} href="#">{this.props.currentZone.name}</a></h2>
                <span className='detail'>Zip Code: {zipCode}</span>
                <br />
                <span>{this.props.currentZone.timestamp} comments</span>
            </div>
        )
    }
}
