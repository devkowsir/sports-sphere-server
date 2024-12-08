const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Register or Login User
router.post("/", async (req, res) => {
  try {
    let user = await User.findOne({ email });

    if (user) {
      res.status("User already exist with the email.").statusCode(201).send();
      return;
    }
    user = new User(req.body);
    await user.save();

    res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error authenticating user", error });
  }
});

module.exports = router;
