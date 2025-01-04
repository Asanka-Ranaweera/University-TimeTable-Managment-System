const express = require("express");
const router = express.Router();
const timetableController = require("../controllers/timetabel.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Endpoint to get timetable for a specific student
router.get(
  "/:studentId",
  authMiddleware.authenticateToken,
  authMiddleware.isStudent,
  timetableController.getStudentTimetable
);

module.exports = router;
