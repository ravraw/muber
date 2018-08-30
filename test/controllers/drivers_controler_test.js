const mongoose = require("mongoose");
const assert = require("assert");
const request = require("supertest");
const app = require("../../app");
const Driver = mongoose.model("driver");

describe("Driver controller", () => {
  it("POST  to /api/drivers creates a new driver", done => {
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

  it("PUT to /api/drivers/:id  edits an existing driver", done => {
    const driver = new Driver({ email: "t@t.com", driving: false });
    driver.save().then(() => {
      request(app)
        .put(`/api/drivers/${driver._id}`)
        .send({ driving: true })
        .end(() => {
          Driver.findOne({ email: "t@t.com" }).then(driver => {
            assert(driver.driving === true);
            done();
          });
        });
    });
  });
});
