/* global gapi */
import React, { Component } from 'react';
import AccountInputs from './AccountInputs';
// import { gapi } from 'gapi-script';


class Feature extends Component {
    state = {
        songs : []
    }



    authenticate() {
        return gapi.auth2.getAuthInstance()
            .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
            .then(function() { console.log("Sign-in successful"); },
                    function(err) { console.error("Error signing in", err); });
    }
    loadClient() {
        gapi.client.setApiKey("AIzaSyBJnV3w1sOdXHKWZunDoW0GOxOXgH6p78k");
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { console.log("GAPI client loaded for API"); },
                    function(err) { console.error("Error loading GAPI client for API", err); });
    }

    ytLogIn = () => {
        this.authenticate().then(this.loadClient)
        console.log("button clicked")
    }

    render() {
        return (
            <React.Fragment>
              <div class="musicWrapper">
                <h1 style={{fontWeight: "700", fontSize: "52px"}}>{this.props.title}</h1>
                <AccountInputs onSubmit={() => this.props.onSubmit} style={{width: "100%"}} ytLogIn={this.ytLogIn}/>
                <div>{this.state.songs}</div>
              </div>
            </React.Fragment>
        );
    }
}

export default Feature;
