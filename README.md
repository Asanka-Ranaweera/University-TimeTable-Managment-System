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

<!-- Repeat this format for all other API methods -->
