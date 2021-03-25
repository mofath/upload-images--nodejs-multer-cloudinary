const mongoose = require("mongoose");

const userShema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userShema);
