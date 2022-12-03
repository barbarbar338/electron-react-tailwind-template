import { FC, ReactNode, useEffect } from "react";
import { Titlebar } from "../Titlebar";

const { ipcRenderer } = window.require("electron");

export interface ILayout {
	children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
	useEffect(() => {
		ipcRenderer.send("app_version");

		ipcRenderer.on("app_version", (event: any, arg: any) => {
			ipcRenderer.removeAllListeners("app_version");
			console.log(arg.version);
		});

		ipcRenderer.on("update_available", () => {
			ipcRenderer.removeAllListeners("update_available");
			console.log("update available, downloading...");
		});

		ipcRenderer.on("update_downloaded", () => {
			ipcRenderer.removeAllListeners("update_downloaded");
			console.log("update downloaded, restarting...");
			ipcRenderer.send("restart_app");
		});
	}, []);

	return (
		<>
			<Titlebar />
			<div className="select-none">{children}</div>
		</>
	);
};
