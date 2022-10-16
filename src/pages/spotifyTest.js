import React from "react";
import '../styles/home.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {useEffect, useState} from 'react';
import axios from 'axios';


function SpotifyTest() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const CLIENT_ID = "df03825d46e042fd89c85edc2b7a8d0a"
  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  // LOGIN
  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
          token = hash.substring(1)?.split("&").find(elem => elem.startsWith("access_token"))?.split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

  // LOGOUT
  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
    }

  // variables used to fetch data
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

  // FUNCTION CALL --------- SEARCH ARTISTS ------------
  const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })

    setArtists(data.artists.items)
  }

  // DISPLAYING DATA --------- ARTISTS----------------
  const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
    ))
  }


  return (
    <div className="SpotifyTest">
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
      <form onSubmit={searchArtists}>
          <input type="text" onChange={e => setSearchKey(e.target.value)}/>
          <button type={"submit"}>Search</button>
      </form>
      {renderArtists()}

    </div>
  );
}

export default SpotifyTest;
