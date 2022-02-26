const { app, BrowserWindow } = require("electron");
const { createTray } = require("./utils/createTray");
const { createMainWindow } = require("./utils/createMainWindow");
const { createPopupWindow } = require("./utils/createPopupWindow");
const { showNotification } = require("./utils/showNotification");
const AutoLaunch = require("auto-launch");
const remote = require("@electron/remote/main");
const config = require("./utils/config");

if (config.isDev) require("electron-reloader")(module);
if (require("electron-squirrel-startup")) app.quit();

remote.initialize();

const autoStart = new AutoLaunch({
	name: config.appName,
});
if (!config.isDev) autoStart.enable();

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
