const express = require("express");
const Equipment = require("../models/Equipment");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Equipment.find();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching equipment", error });
  }
});

router.get("/:email", async (req, res) => {
  const email = req.params.email;

  try {
    const data = await Equipment.find({ userEmail: email });
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching equipment", error });
  }
});

module.exports = router;
