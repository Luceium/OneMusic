import React, { Component } from 'react';
import AccountInput from './AccountInput';

class AccountInputs extends Component {
    render() { 
        return (
            <div>
                <input enterKeyHint={this.props.hint}></input>
            </div>
        );
    }
}
 
export default AccountInputs;