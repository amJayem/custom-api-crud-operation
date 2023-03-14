const express = require("express");
const router = express.Router();
const userModel = require("../models/model");

router.use(express.json());

// getting all data from users collection
router.get("/users", async (req, res) => {
  const result = await userModel.find();
  res.status(201).send(`
  <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
     ${result.map(
       (user) =>
         `<tr>
         <td>${user.name}</td>
         <td>${user.age}</td>
         <td>${user.email}</td>
       </tr>`
     )} 
      </tbody>
    </table>
    `);
});

// storing user data to users collection
router.post("/user", async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newData = new userModel({ name, age, email });
    const result = await newData.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// user info can be updated by id
router.put("/update-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userInfo = {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    };
    const updatedUser = await userModel.findByIdAndUpdate(id, userInfo, {
      new: true,
    });
    res.status(201).send(updatedUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
