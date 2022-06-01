import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import './assets/style.scss';
import './assets/typography.scss';

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);