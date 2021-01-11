import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "semantic-ui-css/semantic.min.css";
import { debugContextDevtool } from "react-context-devtool";

const container = document.querySelector("#root");

ReactDOM.render(<App />, container);

// Attach root container
//debugContextDevtool(container, {});
