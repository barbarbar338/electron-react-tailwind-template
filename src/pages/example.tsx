import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/app.css";

export const ExamplePage: FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					You are currently in "Example" page. Edit{" "}
					<code>src/pages/example.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<a
					className="App-link"
					href="https://www.electronjs.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Electron
				</a>
				<Link className="App-link" to="/">
					Use Router (/)
				</Link>
			</header>
		</div>
	);
};
