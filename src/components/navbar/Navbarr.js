import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbarr.css";


export const Navbarr = () => {
  const {loginWithPopup, isAuthenticated, logout } = useAuth0();
  return (
    <>
     <ul>
      <li class = "listl"><button class="button">Home</button></li>
      <li class = "listl"><button class="button">About</button></li>
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


