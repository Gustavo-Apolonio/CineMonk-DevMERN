import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";
import CreateGlobalStyle from "./assets/styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <CreateGlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
