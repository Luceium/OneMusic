import React, { Component } from 'react';
import AccountInput from './AccountInput';
import {useEffect, useState} from 'react';
import axios from 'axios';
import needsToLogIn from "./needsToLogIn.js";


function AccountInputs() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const CLIENT_ID = "df03825d46e042fd89c85edc2b7a8d0a"
    const REDIRECT_URI = "http://localhost:3000//"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")


    return (
      <div>
      <div class="templateCol">

            <div class="container">
              <a class="login-container">
                <a class="btn btn--login" id="js-btn-login" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
              </a>
              <div class="main-container" id="js-main-container"></div>
            </div>

            <div class="container">
              <a class="login-container">
                <a style={{padding:"50px"}}class="btn" id="syncBtn" href="/">SYNC</a>
              </a>
              <div class="main-container" id="js-main-container"></div>
            </div>

            <div class="container">
              <a class="login-container">
                <a class="btn btn--login" id="js-btn-login-yt" href="/">Login to Youtube</a>
              </a>
              <div class="main-container" id="js-main-container-yt"></div>
            </div>


      </div>
      {needsToLogIn()}
      </div>

    );
}

export default AccountInputs;
