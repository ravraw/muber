const Driver = require("../models/Driver");
module.exports = {
  greeting(req, res) {
    res.send({ say: "Hello" });
  },
  createDriver(req, res, next) {
    const driverProps = req.body;
    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(next);
  }
};
