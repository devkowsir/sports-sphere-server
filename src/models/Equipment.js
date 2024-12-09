const mongoose = require("mongoose");

const customizationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cost: { type: Number, required: true },
  },
  { _id: false }
);

const equipmentSchema = new mongoose.Schema({
  image: { type: String, required: true },
  itemName: { type: String, required: true },
  categoryName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  customizations: [customizationSchema],
  processingTime: { type: String, required: true },
  stockStatus: { type: Number, required: true },
  userEmail: { type: String, required: true },
  userName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.models["Equipment"] || mongoose.model("Equipment", equipmentSchema);
