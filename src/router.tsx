import { FC } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { IndexPage } from "./pages";
import { ExamplePage } from "./pages/example";

export const Router: FC = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/">
					<IndexPage />
				</Route>
				<Route exact path="/example">
					<ExamplePage />
				</Route>
			</Switch>
		</HashRouter>
	);
};
