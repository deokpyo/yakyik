// container component - actual interaction will happen
// this component will interact with the CRUD API
import React from 'react';
import Zone from '../units/Zone';
import { APIManager } from '../../utils';

export default class Zones extends React.Component {
    constructor() {
        super();
        this.state = {
            zone: {
                name: '',
                zipCode: ''
            },
            list: []
        }
    }

    componentDidMount() {
        //console.log('componentDidMount: ');
        // GET request
        APIManager.get('/api/zone', null, (err, response) => {
            if (err) {
                alert('ERROR: ' + err.message);
                return
            }
            //console.log('GET: ' + JSON.stringify(response));
            let results = response.results;
            this.setState({
                list: results
            })
        })
    }

    addZone() {
        console.log('ADD ZONE: ' + JSON.stringify(this.state.zone));
        // take a string then convert into an array
        let updatedZone = Object.assign({}, this.state.zone);
        // split by comma then return an array to match the database type
        updatedZone['zipCodes'] = updatedZone.zipCode.split(',');
        APIManager.post('/api/zone', updatedZone, (err, response) => {
            if (err) {
                alert('ERROR: ' + err.message);
                return
            }
            console.log('ZONE CREATED: ' + JSON.stringify(response));
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(response.result);
            this.setState({
                list: updatedList
            })
        })
        // let updatedList = Object.assign([], this.state.list);
        // updatedList.push(this.state.zone);
        // this.setState({
        //     list: updatedList
        // })
    }

    updateZone(event) {
        // console.log("updateZone: " + event.target.id + ' == ' + event.target.value);
        let updatedZone = Object.assign({}, this.state.zone)
        updatedZone[event.target.id] = event.target.value
        this.setState({
            zone: updatedZone
        })

    }

    render() {
        const listItems = this.state.list.map((zone, i) => {
            return (
                <li key={i}><Zone currentZone={zone} /></li>
            )
        });
        return (
            <div>
                <ol>
                    {listItems}
                </ol>
                <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Name" />
                <br />
                <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Zip Code" />
                <br />
                <button onClick={this.addZone.bind(this)} className="btn btn-danger">Submit Zone</button>
            </div>
        )
    }
}