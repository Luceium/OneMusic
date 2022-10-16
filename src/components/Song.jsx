import React, { Component } from 'react';

class Song extends Component {
    render() {
        return (
            <h3>song</h3>
        );
    }
}

export default Song;



// I'm leaving some spare code here:
/*
this.spotifyTokenToLocalStorage();
window.location = "//" + window.location.hostname + window.location.pathname + "#/music";

getSpotifyToken = () => {
    let url = window.location.href;
    return url.substring(url.indexOf("#") + 2);
}

spotifyTokenToLocalStorage = () => {
    localStorage.setItem("spotifyToken", this.getSpotifyToken());
}*/
