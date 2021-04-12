const { app, BrowserWindow, Tray, Notification, Menu } = require("electron");

if (require("electron-squirrel-startup")) app.quit();

const path = require("path");
const isDev = require("electron-is-dev");

require("@electron/remote/main").initialize();

const icon = path.join(__dirname, "/favicon.ico");
let mainWindow = null;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			devTools: false,
			contextIsolation: false,
		},
		frame: true,
		icon,
		title: "Electron - React Template",
	});
	mainWindow.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "../build/index.html")}`,
	);
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
	if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
