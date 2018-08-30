const mongoose = require("mongoose");
const assert = require("assert");
const request = require("supertest");
const app = require("../../app");
const Driver = mongoose.model("driver");

describe("Driver controller", () => {
  it("makes a POST request to /api/drivers to create a new driver", done => {
    Driver.countDocuments().then(count => {
      request(app)
        .post("/api/drivers")
        .send({ email: "test@test.com" })
        .end(() => {
          Driver.countDocuments().then(newCount => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });
});
