import React, { Component } from 'react';

class SpotifyLogIn extends Component {
    state = {  }
    render() {
        this.spotifyTokenToLocalStorage();
        window.location = "//" + window.location.hostname + window.location.pathname + "#/music";
        return (
            <p></p>
        );
    }

    getSpotifyToken = () => {
        let url = window.location.href;
        return url.substring(url.indexOf("#") + 1);
    }

    spotifyTokenToLocalStorage = () => {
        localStorage.setItem("spotifyToken", this.getSpotifyToken());
    }
}

export default SpotifyLogIn;
