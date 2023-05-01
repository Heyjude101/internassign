import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Main.css";
import TextareaPage from "../textarea/TextareaPage";


export const Main = () => {
    const {user , isAuthenticated} = useAuth0();
  return (
    <>
       <div class ="center">
        {
            isAuthenticated? <h1>Signed in as {user.name}</h1> : <h1>Not signed in!</h1>
        }
        <br></br>
        <TextareaPage/>

        
        
        
      </div>
    </>
  );
};
