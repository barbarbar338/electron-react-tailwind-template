import { FC } from "react";
import { Titlebar } from "../Titlebar";

export const Layout: FC = ({ children }) => {
	return (
		<>
			<Titlebar />
			<div className="select-none">{children}</div>
		</>
	);
};
