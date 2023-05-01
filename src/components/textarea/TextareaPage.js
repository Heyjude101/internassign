import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./TextareaPage.css";


const TextareaPage = () => {

    const {isAuthenticated , user} = useAuth0();
  return (
  <>
    <div className="input-group">
      <div className="input-group-prepend">
      </div>
      <textarea
        disabled = {isAuthenticated? false: true}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
        value = {isAuthenticated ? `Hi ${user.name} , You are currently logged in! Let's take you through this this project. I have implemented basic login and logout functionality using Auth0. I have also demonstrated authenticated endpoint protection via the private button above. If you click that, you be greeted with a message from /private end point along with your name! ` : "You are logged out. Try clicking the private button above? It asks you to log in. That's the /private end point talking to you. If you try to directly access it in the browser, it will show Not accessible. Try logging in and then click the same. It will show you your name."}
      >
      </textarea>
    </div>

  </>
    
    
  );
};

export default TextareaPage;