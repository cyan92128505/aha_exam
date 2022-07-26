import request from "supertest";
import app from "../src/app";

describe("Test app.ts", () => {
  test("Test route API", async () => {
    const res = await request(app).get("/api");
    expect(res.body).toEqual({ message: "Hello!" });
  });
});
