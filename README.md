# University-TimeTable-Managment-System

<h1>University Timetable Management System Documentation</h1>

<h2>Technology Stack</h2>
<ul>
  <li>Backend: Node.js with Express.js framework</li>
  <li>Database: MongoDB for data storage</li>
  <li>Authentication: JSON Web Tokens (JWT) for user authentication</li>
</ul>

<hr>

<h2>Installation and Setup</h2>
<ol>
  <li>Clone the project repository.</li>
  <li>Install dependencies using <code>npm install</code>.</li>
  <li>Configure environment variables, including the MongoDB URI and JWT Secret Key.</li>
  <li>Run the Node.js server using <code>npm start</code>.</li>
</ol>

<hr>

<h2>University Timetable Management System API</h2>

<h3>Authentication - New User Registration</h3>
<ul>
  <li><strong>POST Method</strong></li>
  <li>URL: <code>http://localhost:8080/auth/register</code></li>
</ul>
<p><strong>Request Body:</strong></p>
<pre>
{
  "username": "Asanka Ranaweera",
  "email": "asanka12@gmail.com",
  "password": "123456"
}
</pre>
<p><strong>Response:</strong></p>
<pre>
{
  "message": "User registered successfully",
  "user": {
      "username": "Asanka Ranaweera",
      "email": "asanka12@gmail.com",
      "password": "$2a$10$OP85AGZlbAHCSmoHxx6.pej9KXqE1DI7nAWZ4kUSFeH45IFZOz5VG",
      "role": "student",
      "_id": "65ffcdf1cd5f9971d844daa5",
      "__v": 0
  }
}
</pre>
<p><strong>Validations:</strong> Input fields must not be empty, unique, and valid email addresses.</p>

<hr>

<h3>Authentication - Login</h3>
<ul>
  <li><strong>POST Method</strong></li>
  <li>URL: <code>http://localhost:8080/auth/login</code></li>
</ul>
<p><strong>Request Body:</strong></p>
<pre>
{
  "email": "asanka12@gmail.com",
  "password": "123456"
}
</pre>
<p><strong>Response:</strong></p>
<pre>
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
</pre>

<hr>

<h3>Create New Course</h3>
<ul>
  <li><strong>POST Method</strong></li>
  <li>URL: <code>http://localhost:8080/courses</code></li>
</ul>
<p><strong>Request Body:</strong></p>
<pre>
{
  "courseName": "Software Engineering",
  "courseCode": "SE1111",
  "description": "Design Patterns",
  "credits": 4,
  "schedule": "Monday, Wednesday, Friday 10:00 AM - 11:30 AM"
}
</pre>
<p><strong>Response:</strong></p>
<pre>
{
  "message": "Course created successfully",
  "course": {
      "courseName": "Software Engineering",
      "courseCode": "SE1111",
      "description": "Design Patterns",
      "credits": 4,
      "schedule": "Monday, Wednesday, Friday 10:00 AM - 11:30 AM",
      "_id": "65ffd139cd5f9971d844dab1",
      "__v": 0
  }
}
</pre>

<!-- Repeat similar sections for other APIs -->

<hr>

<h3>Get All Courses</h3>
<ul>
  <li><strong>GET Method</strong></li>
  <li>URL: <code>http://localhost:8080/courses</code></li>
</ul>
<p><strong>Response:</strong></p>
<pre>
{
  "faculty": {
      "_id": "65f992401bf903088a4acd1b",
      "name": "Asanka Ranaweera"
  },
  "classSessions": [],
  "_id": "65f9cbd8f518bf6dcac4274a",
  "courseName": "SE",
  "courseCode": "SE1111",
  "description": "SE",
  "credits": 4,
  "__v": 0
}
</pre>

<!-- Add other API methods similarly -->

<h3>Assign Faculty Members to a Course</h3>
<ul>
  <li><strong>PUT Method</strong></li>
  <li>URL: <code>http://localhost:8080/courses/course:id/assign-faculty</code></li>
</ul>
<p><strong>Request Body:</strong></p>
<pre>
{
 "facultyId": "65f992401bf903088a4acd1b",
 "facultyName": "Dilan Shanuka"
}
</pre>
<p><strong>Response:</strong></p>
<pre>
{
  "message": "Faculty assigned to course successfully",
  "course": {
      "faculty": {
          "_id": "65f992401bf903088a4acd1b",
          "name": "Dilan Shanuka"
      },
      "courseName": "ABC Engineering",
      "courseCode": "E1111",
      "description": "Introduction to Engineering",
      "credits": 2,
      "schedule": "Mon-Wed-Fri 10:00 AM - 11:30 AM"
  }
}
</pre>
<h3>Create New Class Session</h3>
<ul>
  <li><strong>POST Method</strong></li>
  <li>URL: <code>http://localhost:8080/class-sessions</code></li>
</ul>
<p><strong>Request Body:</strong></p>
<pre>
{
  "course": "65fb2637a55e4fd2e7750136",
  "dateTime": "2024-03-25T10:00:00",
  "faculty": "65f9b2e1bc2bcc76f1873ed4",
  "location": "Room 105",
  "students": ["65ffcdf1cd5f9971d844daa5"],
  "type": "ClassSession"
}
</pre>
<p><strong>Response:</strong></p>
<pre>
{
  "message": "Class session created successfully",
  "classSession": {
    "course": "65fb2637a55e4fd2e7750136",
    "dateTime": "2024-03-25T04:30:00.000Z",
    "faculty": "65f9b2e1bc2bcc76f1873ed4",
    "location": "Room 105",
    "students": ["65ffcdf1cd5f9971d844daa5"],
    "_id": "6600191aba8d31b4038f5c9a",
    "__v": 0
  }
}
</pre>

<h3>Get All Class Sessions For a Student</h3>
<ul>
  <li><strong>GET Method</strong></li>
  <li>URL: <code>http://localhost:8080/class-sessions/timetable/student:id</code></li>
</ul>
<p><strong>Response:</strong></p>
<pre>
[
  {
    "_id": "65fa950303c72914f467bda1",
    "course": "65f9cbd8f518bf6dcac4274a",
    "dateTime": "2024-03-25T04:30:00.000Z",
    "faculty": "65f992401bf903088a4acd1b",
    "location": "Room 101",
    "students": ["65fa7414c16a47e88723d723"],
    "__v": 0
  },
  {
    "_id": "65fa9981832942b97f4f88a6",
    "course": "65f9cbd8f518bf6dcac4274a",
    "dateTime": "2024-03-25T04:30:00.000Z",
    "faculty": "65f992401bf903088a4acd1b",
    "location": "Room 101",
    "students": [
      "65fa7414c16a47e88723d723",
      "65fa7414c16a47e88723d723"
    ],
    "__v": 0
  }
]
</pre>

<h3>Update Class Sessions</h3>
<ul>
  <li><strong>PUT Method</strong></li>
  <li>URL: <code>http://localhost:8080/class-sessions/classsession:id</code></li>
</ul>
<p><strong>Request Body:</strong></p>
<pre>
{
  "dateTime": "2024-03-26T11:00:00",
  "location": "Room 102"
}
</pre>

<h3>Delete Class Session</h3>
<ul>
  <li><strong>DELETE Method</strong></li>
  <li>URL: <code>http://localhost:8080/class-sessions/classsession:id</code></li>
</ul>

<h3>Create a New Class Room</h3>
<ul>
  <li><strong>POST Method</strong></li>
  <li>URL: <code>http://localhost:8080/rooms</code></li>
</ul>
<p><strong>Request Body:</strong></p>
<pre>
{
  "name": "Room 101",
  "description": "Large classroom with projector",
  "capacity": 200
}
</pre>
<p><strong>Response:</strong></p>
<pre>
{
  "message": "Room created successfully",
  "room": {
    "name": "Room 101",
    "description": "Large classroom with projector",
    "capacity": 200,
    "isAvailable": true,
    "_id": "660029ad9758631ee526df69",
    "__v": 0
  }
}
</pre>

<h3>Get All Class Rooms</h3>
<ul>
  <li><strong>GET Method</strong></li>
  <li>URL: <code>http://localhost:8080/rooms</code></li>
</ul>
<p><strong>Response:</strong></p>
<pre>
[
  {
    "_id": "65fa63f50551b6e9939ac08b",
    "name": "Room A234",
    "description": "Large classroom with projector",
    "capacity": 250,
    "isAvailable": true,
    "__v": 0
  }
]
</pre>

<h3>Create a Booking</h3>
<ul>
  <li><strong>POST Method</strong></li>
  <li>URL: <code>http://localhost:8080/bookings/create</code></li>
</ul>
<p><strong>Request Body:</strong></p>
<pre>
{
  "roomId": "660029ad9758631ee526df62",
  "startTime": "2024-03-27T10:00:00",
  "endTime": "2024-03-27T12:00:00"
}
</pre>
<p><strong>Response:</strong></p>
<pre>
{
  "message": "Booking created successfully",
  "booking": {
    "roomId": "660029ad9758631ee526df62",
    "startTime": "2024-03-28T04:30:00.000Z",
    "endTime": "2024-03-28T06:30:00.000Z",
    "_id": "66003bf5237598cdcbe871da",
    "__v": 0
  }
}
</pre>

<h3>Create a New Resource</h3>
<ul>
  <li><strong>POST Method</strong></li>
  <li>URL: <code>http://localhost:8080/resources</code></li>
</ul>
<p><strong>Request Body:</strong></p>
<pre>
{
  "name": "Projector",
  "description": "High-quality projector for presentations",
  "quantity": 5,
  "isAvailable": true
}
</pre>

<h3>Get All Resources</h3>
<ul>
  <li><strong>GET Method</strong></li>
  <li>URL: <code>http://localhost:8080/resources</code></li>
</ul>
<p><strong>Response:</strong></p>
<pre>
[
  {
    "_id": "65fa652b0551b6e9939ac090",
    "name": "Projector 2",
    "description": "High-quality projector for presentations",
    "quantity": 5,
    "isAvailable": true,
    "__v": 0
  }
]
</pre>

<h3>Enroll in a Course</h3>
<ul>
  <li><strong>POST Method</strong></li>
  <li>URL: <code>http://localhost:8080/enrollments/enroll</code></li>
</ul>
<p><strong>Request Body:</strong></p>
<pre>
{
  "studentId": "65ffcdf1cd5f9971d844daa5",
  "studentName": "Dilan Shanuka",
  "courseId": "65f9cbd8f518bf6dcac4274a",
  "courseName": "SE"
}
</pre>

<h3>Get Student Enrolled Courses</h3>
<ul>
  <li><strong>GET Method</strong></li>
  <li>URL: <code>http://localhost:8080/enrollments/timetable/student:id</code></li>
</ul>
<p><strong>Response:</strong></p>
<pre>
[
  {
    "courseName": "Software Engineering",
    "schedule": "Monday, Wednesday, Friday 10:00 AM - 11:30 AM"
  }
]
</pre>

<h3>Get All Enrollments in a Course</h3>
<ul>
  <li><strong>GET Method</strong></li>
  <li>URL: <code>http://localhost:8080/enrollments/course/course:id/enrollments</code></li>
</ul>

<h3>Remove a Student from a Course</h3>
<ul>
  <li><strong>PUT Method</strong></li>
  <li>URL: <code>http://localhost:8080/enrollments/course/course:id/enrollments</code></li>
</ul>

<h3>Create a Notification</h3>
<ul>
  <li><strong>POST Method</</strong></li>
  <li>URL: <code>http://localhost:8080/notifications/create</code></li>
</ul>
  

