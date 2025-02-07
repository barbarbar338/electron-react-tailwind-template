import { Notification } from "electron";

export const showNotification = (title, body) => {
	const notification = new Notification({
		title,
		body,
		silent: true,
		timeoutType: "default",
	});

	notification.show();

	return notification;
};
