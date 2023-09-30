// Dependencies

const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");
const User = require("../models/user");
const { userValidate, userAuthenticate } = require("../utils/middleware");

// Endpoints

router.post("/", userAuthenticate, userValidate, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.sub });
    if (!user) return res.status(404).send("User doesn't exist");
    const customer = new Customer(req.body);
    customer.user_id = user.id;
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Middleware function

const getCustomer = async (req, res, next) => {
  try {
    const findCustomer = await Customer.findById(req.params.id);
    if (!findCustomer) {
      return res.status(404).send("Customer does not exist");
    }
    req.customer = findCustomer;
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

router.get("/:id", userAuthenticate, getCustomer, async (req, res) => {
  res.status(200).json(req.customer);
});

router.get("/:id/edit", userAuthenticate, getCustomer, async (req, res) => {
  res.status(200).json(req.customer);
});


router.put("/:id", userAuthenticate, userValidate, async (req, res) => {
  try {
    const updateCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updateCustomer) return res.status(404).send("Customer doesn't exist");
    res.status(201).json(updateCustomer);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", userAuthenticate, async (req, res) => {
  try {
    const deleteCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deleteCustomer) return res.status(404).send("Customer doesn't exist");
    res.status(200).json("Customer been deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("", userAuthenticate, async (req, res) => {
  try {
    const userInfo = await User.findOne({ email: req.user.sub });
    if (!userInfo) return res.status(404).send("User doesn't exist");
    const findCustomers = await Customer.find({ user_id: userInfo.id });
    if (!findCustomers) return res.status(404).send("User has no registered customers");
    res.status(200).json(findCustomers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
