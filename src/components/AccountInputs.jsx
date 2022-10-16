import React, { Component } from 'react';
import AccountInput from './AccountInput';

class AccountInputs extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <AccountInput  hint='Enter your spotify'/>
                <button className='btn btn-primary btn-lg' onClick={() => this.props.onSubmit}>Submit</button>
                <AccountInput hint='Enter your youtube music'/>
            </div>
        );
    }
}
 
export default AccountInputs;