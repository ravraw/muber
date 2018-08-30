const assert = require("assert");
const request = require("supertest");
const app = require("../app");

describe("The express App", () => {
  it("Handles GET requests to /api", done => {
    request(app)
      .get("/api")
      .end((err, res) => {
        assert(res.body.say === "Hello");
        done();
      });
  });
});
