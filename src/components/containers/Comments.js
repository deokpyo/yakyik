import React from 'react';
import superagent from 'superagent';
import Comment from '../units/Comment';
import style from './styles'

export default class Comments extends React.Component {
    constructor() {
        super()
        this.state = {
            comment: {
                username: '',
                body: '',
                timestamp: '',
            },
            list: []
        }
    }

    componentDidMount(){
        // GET request
        superagent
        .get('/api/comment')
        .query(null)
        // type of data receiving
        .set('Accept', 'application/json')
        // call back
        .end((err, response) => {
            if(err){
                alert('ERROR: ' + err);
                return
            }
            console.log(JSON.stringify(response.body));
            let results = response.body.results;
            this.setState({
                list: results
            })
        })
    }

    updateUsername(event){
        //console.log('updatedUsername: ' + event.target.value);
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['username'] = event.target.value;
        this.setState({
            comment: updatedComment
        })
    }

    updateBody(event){
        //console.log('updatedBody: ' + event.target.value);
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['body'] = event.target.value;
        this.setState({
            comment: updatedComment
        })
    }

    updateTimestamp(event){
        //console.log('updatedTimestamp: ' + event.target.value);
        let updatedComment = Object.assign({}, this.state.comment);
        updatedComment['timestamp'] = event.target.value;
        this.setState({
            comment: updatedComment
        })

    }

    submitComment(){
        console.log('submitComment' + JSON.stringify(this.state.comment));
        let updatedList = Object.assign([], this.state.list);
        updatedList.push(this.state.comment);
        this.setState({
            list: updatedList
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
                    <br/>
                    <textarea onChange={this.updateBody.bind(this)} className="form-control" placeholder="Comment" />
                    <br/>
                    <input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="Timestamp" />
                    <br/>
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
                </div>
            </div>
        )
    }
}