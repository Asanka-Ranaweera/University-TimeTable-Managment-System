const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollment.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post(
  "/enroll",
  authMiddleware.authenticateToken,
  enrollmentController.enrollCourse
);
router.get(
  "/timetable/:studentId",
  authMiddleware.authenticateToken,
  enrollmentController.getStudentTimetable
);
router.get(
  "/course/:courseId/enrollments",
  authMiddleware.authenticateToken,
  enrollmentController.viewCourseEnrollments
);
router.put(
  "/course/:courseId/enrollments",
  authMiddleware.authenticateToken,
  enrollmentController.manageEnrollments
);

module.exports = router;
