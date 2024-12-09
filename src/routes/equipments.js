const express = require("express");
const Equipment = require("../models/Equipment");

const router = express.Router();

router.get("/", async (req, res) => {
  const { sort, email } = req.query;
  const sortOptions = sort ? { price: parseInt(sort) } : { createdAt: -1 };
  const filterOptions = email ? { userEmail: email } : {};

  try {
    const data = await Equipment.find(filterOptions).sort(sortOptions);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching equipment", error });
  }
});

module.exports = router;
