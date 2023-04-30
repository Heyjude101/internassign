import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./TextareaPage.css";

const TextareaPage = () => {

    const {isAuthenticated} = useAuth0();
  return (
    <div className="input-group">
      <div className="input-group-prepend">
      </div>
      <textarea
        disabled = {isAuthenticated? false: true}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="5"
      >
      </textarea>
    </div>
  );
};

export default TextareaPage;