const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Register or Login User
router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      res.status(201).send({ message: "User already exist with the email.", user });
      return;
    }
    user = new User(req.body);
    await user.save();

    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(500).json({ message: "Error authenticating user", error });
  }
});

module.exports = router;
