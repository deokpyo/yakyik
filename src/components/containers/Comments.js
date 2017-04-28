import React from 'react';
import Comment from '../units/Comment';
import style from './styles';
import { APIManager } from '../../utils';

export default class Comments extends React.Component {
    constructor() {
        super()
        this.state = {
            comment: {
                username: '',
                body: '',
            },
            list: []
        }
    }

    componentDidMount() {
        //console.log('componentDidMount: ');
        // GET request
        APIManager.get('/api/comment', null, (err, response) => {
            if (err) {
                alert('ERROR:' + err.message);
                return
            }
            //console.log(JSON.stringify(response));
            let results = response.results;
            this.setState({
                list: results
            })
        })
    }

    updateUsername(event) {
        //console.log('updatedUsername: ' + event.target.value);
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['username'] = event.target.value;
        this.setState({
            comment: updatedComment
        })
    }

    updateBody(event) {
        //console.log('updatedBody: ' + event.target.value);
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['body'] = event.target.value;
        this.setState({
            comment: updatedComment
        })
    }

    submitComment() {
        console.log('ADD COMMENT: ' + JSON.stringify(this.state.comment));
        // take a string then convert into an array
        let updatedComment = Object.assign({}, this.state.comment);
        console.log(updatedComment);
        APIManager.post('/api/comment', updatedComment, (err, response) => {
            if (err) {
                alert('ERROR: ' + err.message);
                return
            }
            console.log('COMMENT CREATED: ' + JSON.stringify(response));
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(response.result);
            this.setState({
                list: updatedList
            })
        })
    }

    render() {
        const styles = style.comment;
        const commentList = this.state.list.map((comment, i) => {
            return (
                <li key={i}><Comment currentComment={comment} /></li>
            )
        });
        return (
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={styles.commentsBox}>
                    <ul style={styles.commentsList}>
                        {commentList}
                    </ul>
                    <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" />
                    <br />
                    <textarea onChange={this.updateBody.bind(this)} className="form-control" placeholder="Comment" />
                    <br />
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
                </div>
            </div>
        )
    }
}