const express = require("express");
const router = express.Router();
const userModel = require("../models/model");

router.use(express.json());

// storing user data to users collection
router.post("/data", async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newData = new userModel({ name, age, email });
    const result = await newData.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
