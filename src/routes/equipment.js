const express = require("express");
const Equipment = require("../models/Equipment");

const router = express.Router();

// Create Equipment
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const equipment = new Equipment(req.body);
    await equipment.save();
    res.status(201).json(equipment);
  } catch (error) {
    res.status(500).json({ message: "Error creating equipment", error });
  }
});
