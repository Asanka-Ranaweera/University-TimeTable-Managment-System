const Notification = require("../models/notification.model");

exports.generateNotification = async (message, type) => {
  try {
    const notification = await Notification.create({ message, type });
    return notification;
  } catch (error) {
    throw new Error("Failed to generate notification");
  }
};
