import React, { Component } from 'react';
import AccountInputs from './AccountInputs';

class Feature extends Component {
    state = {
        songs : []
    } 

    render() { 
        return (
            <React.Fragment>
                <h1>{this.props.title}</h1>
                <AccountInputs onSubmit={() => this.props.onSubmit}/>
                <div>{this.state.songs}</div>
            </React.Fragment>
        );
    }
}
 
export default Feature;