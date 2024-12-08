const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  photoURL: { type: String },
});

module.exports = mongoose.models["User"] || mongoose.model("User", userSchema);
