const ClassSession = require("../models/classTime.model");
const Notification = require("../models/notification.model");

exports.createClassSession = async (req, res) => {
  try {
    // Create class session
    const classSession = await ClassSession.create(req.body);

    // Notify users about the new class session
    const message = `New class session created for course ${classSession.courseName}`;
    const notifications = await Notification.create({
      message,
      user: classSession.students,
    });

    res
      .status(201)
      .json({ message: "Class session created successfully", classSession });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStudentTimetable = async (req, res) => {
  try {
    const { studentId } = req.params;
    // Fetch class sessions for which the student is enrolled
    const timetable = await ClassSession.find({ students: studentId });
    res.json(timetable);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateClassSession = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClassSession = await ClassSession.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json({
      message: "Class session updated successfully",
      classSession: updatedClassSession,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteClassSession = async (req, res) => {
  try {
    const { id } = req.params;
    await ClassSession.findByIdAndDelete(id);
    res.json({ message: "Class session deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
