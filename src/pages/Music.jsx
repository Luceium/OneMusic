import React, {Component} from "react";
import Feature from "../components/feature";

class MusicPage extends Component{
    handleSubmit = () => {
        console.log("hi");
    }

    render(){
        return (
            <React.Fragment>
                <Feature title='SYNC YOUR MUSIC' onSubmit={this.handleSubmit()}/>
                <div style={{
                    height: "10vh"
                }}/>
                <Feature title='COMPARE WITH FRIENDS' onSubmit={this.handleSubmit()}/>
            </React.Fragment>
        );
    }
}

export default MusicPage;
