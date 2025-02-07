import isDev from "electron-is-dev";
import { join } from "path";

export let config = {
	// Change these values to customize your app
	appName: "Electron React Tailwind Template",
	icon: join(process.cwd(), "public", "favicon.ico"),

	// More like global variables, don't change them
	tray: null,
	isQuiting: false,
	mainWindow: null,
	popupWindow: null,
	isDev,
};
