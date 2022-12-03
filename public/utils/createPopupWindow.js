const { BrowserWindow } = require("electron");
const { join } = require("path");
const config = require("./config");
const remote = require("@electron/remote/main");

exports.createPopupWindow = async () => {
	const window = new BrowserWindow({
		width: 260,
		height: 360,
		x: 0,
		y: 0,
		resizable: false,
		alwaysOnTop: true,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			devTools: config.isDev,
			contextIsolation: false,
		},
		frame: false,
		icon: config.icon,
		title: config.appName,
	});

	remote.enable(window.webContents);

	await window.loadURL(
		config.isDev
			? "http://localhost:3000/#/popup"
			: `file://${join(__dirname, "..", "../build/index.html#popup")}`,
	);

	window.hide();

	window.on("close", (e) => {
		if (!config.isQuiting) {
			e.preventDefault();

			window.hide();
		}
	});

	window.on("blur", () => {
		window.hide();
	});

	config.tray.removeAllListeners("click");

	config.tray.on("click", (_, bounds) => {
		window.setPosition(
			bounds.x - window.getSize()[0],
			bounds.y - window.getSize()[1],
			false,
		);

		if (window.isVisible()) window.hide();
		else window.show();
	});

	return window;
};
