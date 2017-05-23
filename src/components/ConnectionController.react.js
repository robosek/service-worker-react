import React, { Component } from 'react';
import Alert from 'react-bootstrap/lib/Alert'

class ConnectionController extends Component {

    constructor(props) {
        super(props);
        this.state = { connectionStatus: navigator.onLine };
    }

    componentDidMount() {
        window.addEventListener(
            'online',
            (event) => {
                this.changeStatus();
            }
        );

        window.addEventListener(
            'offline',
            (event) => {
                this.changeStatus();
            }
        );

    }

    changeStatus() {
        this.setState({
            connectionStatus: navigator.onLine
        });
    }


    componentWillUnmount() {
        window.removeEventListener(
            'online',
            (event) => {
                
            }
        );

        window.removeEventListener(
            'offline',
            (event) => {
                
            }
        );
    }

    render() {
        return (<div>{this.state.connectionStatus ? '' : (<Alert bsStyle="danger"><strong>You are offline right now.</strong> Your request will be send after renew connection.</Alert>)}</div>);
    }
}

export default ConnectionController