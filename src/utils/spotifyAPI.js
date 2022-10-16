//import HomePage from "../pages/Home";

async function getUsers() {
    try {
        let base_url = "https://api.spotify.com/";
        let endpoint = "/authorize";
        let params = "/client_id";
        let res = await fetch(base_url);
        let client_id = 'b39a111c5b4e48858cd558cd7d24a641';
        let redirect_uri = "https://developer.spotify.com/documentation/general/guides/authorization/code-flow/";
        console.log(res.status); // 200
        console.log(res.statusText); // OK  
    }
    catch{

    }
}
async function createPlaylist(){
    /*try{
        let query = "https://api.spotify.com/v1/users/{}/playlists".format(
            "b39a111c5b4e48858cd558cd7d24a641")
        let request_body = json.dumps({
            "name": "Youtube Liked Vids",
            "description": "All Liked Youtube Videos", 
            "public": True
            })
        let response = requests.post(
            query,
            data=request_body,
            headers={
                "Content-Type": "application/json",
                "Authorization": "Bearer {}".format(spotify_token)
            }
        )
        let response_json = response.json()
        let id = response_json["id"];
        console.log(id) // playlist id
        console.log(response_json.status); // 200
        console.log(response_json.statusText); // OK    
        //return response_json["id"]
    }
    catch{

    }*/
}
getUsers();
//createPlaylist();