const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const courseRoutes = require("./routes/course.routes");
const classSessionRoutes = require("./routes/classTime.routes");
const bookingRoutes = require("./routes/booking.routes");
const roomRoutes = require("./routes/classroom.routes");
const resourceRoutes = require("./routes/resource.routes");
const enrollmentRoutes = require("./routes/enrollment.routes");
const notificationRoutes = require("./routes/notification.routes");

const app = express();
app.use(express.json());

mongoose
  .connect(mongoURI, {})
  .then(() => console.log("MongoDB successfully connected.."))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

//routes
app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);
app.use("/class-sessions", classSessionRoutes);
app.use("/bookings", bookingRoutes);
app.use("/rooms", roomRoutes);
app.use("/resources", resourceRoutes);
app.use("/enrollments", enrollmentRoutes);
app.use("/notifications", notificationRoutes);

const PORT = process.env.PORT || 8010;
app.listen(PORT, () => console.log(`\nServer running on port ${PORT} `));