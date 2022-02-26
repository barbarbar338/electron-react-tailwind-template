import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/titlebar.css";
import "react-toastify/dist/ReactToastify.css";

import { Router } from "./router";

ReactDOM.render(
	<React.StrictMode>
		<ToastContainer position="bottom-right" autoClose={2500} />
		<Router />
	</React.StrictMode>,
	document.getElementById("root"),
);
