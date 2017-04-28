import React from 'react';
import style from './styles'

export default class Comment extends React.Component {
    render() {
        const styles = style.comment;
        return (
            <div>
                <p style={styles.body}>{this.props.currentComment.body}</p>
                <span style={styles.username}>{this.props.currentComment.username}</span>
                <hr/>
            </div>
        )
    }
}