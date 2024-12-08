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

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Equipment.findOne({ _id: id });
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching equipment", error });
  }
});

// Update Equipment
router.put("/:id", async (req, res) => {
  try {
    const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedEquipment);
  } catch (error) {
    res.status(500).json({ message: "Error updating equipment", error });
  }
});

// Delete Equipment
router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await Equipment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Equipment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting equipment", error });
  }
});

module.exports = router;
