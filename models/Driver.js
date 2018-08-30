const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  driving: {
    type: boolean,
    default: false
  }
});

const Driver = mongoose.model("driver", DriverSchema);

module.exports = Driver;
