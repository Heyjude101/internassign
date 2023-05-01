import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain= {process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT}
      authorizationParams={{
      redirect_uri: window.location.origin,
      audience : "internassignapi",
      }}
      redirect_uri =  {window.location.origin}
      
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
