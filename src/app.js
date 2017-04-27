// entry component - keep it simple
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/layout/Home';


class App extends React.Component {
    render() {
        return (
                <Home />
        )
    }
}

// only once
ReactDOM.render(<App />, document.getElementById('root'));