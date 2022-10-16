import React, {Component} from "react";
import Feature from "../components/feature";

class MusicPage extends Component{
    handleSubmit = () => {
        console.log("hi");
    }
    
    render(){
        return (
            <React.Fragment>
                <Feature title='Sync Your Music Accounts!' onSubmit={this.handleSubmit()}/>
                <div style={{
                    height: "10vh"
                }}/>
                <Feature title='Compare Your Likes With Your Friends!' onSubmit={this.handleSubmit()}/>
            </React.Fragment>
        );
    }
}

export default MusicPage;

