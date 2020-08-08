import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
ReactDOM.render(
    <Router>
        <GlobalStyle />
        <App />
    </Router>,
    document.getElementById("root")
);
serviceWorker.unregister();
