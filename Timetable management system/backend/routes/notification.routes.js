const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notification.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/create",
  authMiddleware.authenticateToken,
  authMiddleware.isFacultyOrAdmin,
  notificationController.createNotification
);

router.get(
  "/",
  authMiddleware.authenticateToken,
  notificationController.getAllNotifications
);

module.exports = router;
