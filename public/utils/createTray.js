import { app, Menu, shell, Tray } from "electron";
import { config } from "./config.js";
import { showNotification } from "./showNotification.js";

export const createTray = () => {
	const t = new Tray(config.icon);

	t.setToolTip(config.appName);
	t.setContextMenu(
		Menu.buildFromTemplate([
			// Customize the tray menu here
			{
				label: "Show App",
				click: () => {
					if (!config.mainWindow.isVisible())
						config.mainWindow.show();
				},
			},
			{
				label: "Creator",
				submenu: [
					{
						label: "GitHub @barisbored",
						click: () => {
							shell.openExternal("https://github.com/barisbored");
						},
					},
					{
						label: "E-Mail hi@338.rocks",
						click: () => {
							shell.openExternal("mailto:hi@338.rocks");
						},
					},
					{
						label: "Website",
						click: () => {
							shell.openExternal("https://338.rocks");
						},
					},
				],
			},
			{
				label: "Send Notification",
				click: () =>
					showNotification(
						"This Notification Comes From Tray",
						"Hello, world!",
					),
			},
			{
				label: "Quit",
				click: () => {
					config.isQuiting = true;

					app.quit();
				},
			},
		]),
	);

	return t;
};
