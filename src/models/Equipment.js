const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  image: { type: String, required: true },
  itemName: { type: String, required: true },
  categoryName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  customization: { type: Array, required: true },
  processingTime: { type: String, required: true },
  stockStatus: { type: Number, required: true },
  userEmail: { type: String, required: true },
  userName: { type: String, required: true },
});

module.exports = mongoose.models["Equipment"] || mongoose.model("Equipment", equipmentSchema);
