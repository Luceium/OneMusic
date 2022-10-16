import React, { Component } from 'react';

class AccountInput extends Component {
    render() { 
        return (
            <input type="text" placeholder={this.props.hint} style={{
                padding: "3%",
                margin: "6%",
                backgroundColor: this.props.color,
                borderRadius: "20%/50%",
                display: "inline",
                width: "30%"
            }}></input>
        );
    }
}
 
export default AccountInput;