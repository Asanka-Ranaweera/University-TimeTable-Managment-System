const request = require("supertest");
const server = require("../server"); // Import the server instance instead of app
const chai = require("chai");
const expect = chai.expect;

describe("Course API", () => {
  describe("GET /courses", () => {
    it("should return status code 200", async () => {
      const res = await request(server).get("/courses"); // Use server instead of app
      expect(res.status).toBe(200);
    });
  });

  // Add other test cases for POST, PUT, DELETE endpoints
});
