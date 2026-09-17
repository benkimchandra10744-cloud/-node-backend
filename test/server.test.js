const request = require("supertest");
const app = require("../src/server");

describe("Backend API", () => {
  test("GET / returns running message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);

    expect(response.body.message).toBe(
      "Node backend is running"
    );
  });

  test("GET /api/health returns ok", async () => {
    const response = await request(app).get("/api/health");

    expect(response.statusCode).toBe(200);

    expect(response.body.status).toBe("ok");
  });
});