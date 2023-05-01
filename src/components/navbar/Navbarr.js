import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbarr.css";
import axios from "axios";
import swal from 'sweetalert';


export const Navbarr = () => {
  const {loginWithPopup, isAuthenticated, logout , getAccessTokenSilently } = useAuth0();

  

    async function callApi (){
    try {
      const accessToken = await getAccessTokenSilently({
        audience: 'internassignapi'
      });
      // console.log(accessToken);
      const response = await axios.get('http://localhost:4000/private' , {
        headers :{
          authorization: 'Bearer ' + accessToken
        },
      });

      swal("Message from ./private :", response.data, "info");
    }
    catch (error) {
      swal("Message from /private :", "Maybe... you forgot to login :)", "error");
    }
  }

  return (
    <>
     <ul>
      <li class = "listl"><button class="button">Home</button></li>
      <li class = "listl"><button class="button" onClick={callApi} >Private</button></li>
            {isAuthenticated ? (
              <l1 class = "listr"><button class = "button" onClick={()=>{
                logout();
              }}>Logout</button></l1>
            ) : (
              <l1 class = "listr"><button class = "button" onClick={loginWithPopup}>Login</button></l1>
            )}
      
      
    </ul>
    </>
  );
};


