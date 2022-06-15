const { Notification } = require("electron");

exports.showNotification = (title, body) => {
    const notification = new Notification({
        title,
        body,
        silent: true,
        timeoutType: "default",
    });
    notification.show();
    setTimeout(() => {
        notification.close();
    }, 5000);

    return notification;
};
