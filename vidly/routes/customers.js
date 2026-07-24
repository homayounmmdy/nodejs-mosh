const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const {Customer , validate} = require('../models/customer');

router.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");
  res.send(customers);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold,
  });
  customer = await genres.save();
  res.send(customer);
});

module.exports = router;
