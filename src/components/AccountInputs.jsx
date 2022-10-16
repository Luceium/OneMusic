import React, { Component } from 'react';
import AccountInput from './AccountInput';

class AccountInputs extends Component {
    state = {  } 
    render() { 
        return (
            <div style={{
                display: "flex",
                flexDirection: "horizontal",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <AccountInput  hint='Enter your spotify' color="green"/>
                <button className='btn btn-primary' onClick={() => this.props.onSubmit} style={{
                    display: "inline",
                    borderRadius: "50%",
                    padding: "3%",
                    height: "4%",
                    width: "8%"
                }}>Submit</button>
                <AccountInput hint=' input YTmusic liked playlist link' color="red"/>
            </div>
        );
    }
}
 
export default AccountInputs;