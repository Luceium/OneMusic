import React, { Component } from 'react';

class AccountInput extends Component {
    needsToLogIn = () => {
        if (this.props.color == "green" && localStorage.getItem("spotifyToken") == null
            || this.props.color == "red" && localStorage.getItem("youtubeToken") == null){
            return (<button onClick={() => this.props.onLogIn} className="btn rounded-pill text-bg-secondary btn-sm" style={{width: "30%"}}>log in</button>);
        }
    }
    
    render() { 
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <input type="text" placeholder={this.props.hint} style={{
                    padding: "3%",
                    margin: "6%",
                    backgroundColor: this.props.color,
                    borderRadius: "7%/50%",
                    display: "inline",
                    width: "70%"
                }}></input>
                {this.needsToLogIn()}
            </div>
        );
    }
}
 
export default AccountInput;