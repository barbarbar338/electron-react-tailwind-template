import remote from "@electron/remote/main/index.js";
import AutoLaunch from "auto-launch";
import { app, BrowserWindow, ipcMain } from "electron";
import electronUpdater from "electron-updater";
import { config } from "./utils/config.js";
import { createMainWindow } from "./utils/createMainWindow.js";
import { createPopupWindow } from "./utils/createPopupWindow.js";
import { createTray } from "./utils/createTray.js";
import { showNotification } from "./utils/showNotification.js";

remote.initialize();

if (!config.isDev) {
	const autoStart = new AutoLaunch({
		name: config.appName,
	});
	autoStart.enable();
}

app.on("ready", async () => {
	config.mainWindow = await createMainWindow();
	config.tray = createTray();
	config.popupWindow = await createPopupWindow();

	showNotification(
		config.appName,
		"Application running on background! See application tray.",
	);
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0)
		config.mainWindow = createMainWindow();
});

ipcMain.on("app_version", (event) => {
	event.sender.send("app_version", { version: app.getVersion() });
});

electronUpdater.autoUpdater.on("update-available", () => {
	config.mainWindow.webContents.send("update_available");
});

electronUpdater.autoUpdater.on("update-downloaded", () => {
	config.mainWindow.webContents.send("update_downloaded");
});

ipcMain.on("restart_app", () => {
	electronUpdater.autoUpdater.quitAndInstall();
});
