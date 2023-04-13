// Dependencies

const express = require("express");
const router = express.Router();
const Customers = require("../models/customer");
// const User = require("../models/user");
const { userValidate, userAuthenticate } = require("../utils/middleware");

// Endpoints

router.delete("/init", async (req, res) => {
  try {
    const reset = await Customers.deleteMany();
    if (!reset.deletedCount) return res.status(404).send("There are no registered customers");
    res.status(200).send(`Number of Customers that's been removed: ${reset.deletedCount}`);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.post("/", /* userAuthenticate, userValidate, */  async (req, res) => {
  try {
    // const user = await User.findOne({ email: req.user.sub });
    // if (!user) return res.status(404).send("User doest exist");
    // if (!user.biz) return res.status(403).send("Must be a business owner");
    const customers = new Customers(req.body);
    // customers.user_id = user.id;
    await customers.save();
    res.status(201).json(customers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", /*userAuthenticate,*/ async (req, res) => {
  try {
    const findCustomer = await Customers.findById(req.params.id);
    if (!findCustomer) return res.status(404).send("Customer doest exist");
    res.status(200).json(findCustomer);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id",/* userAuthenticate,*/ async (req, res) => {
  try {
    const updateCustomer = await Customers.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updateCustomer) return res.status(404).send("Customer doest exist");
    res.status(201).json(updateBusiness);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", /*userAuthenticate,*/ async (req, res) => {
  try {
    const deleteCustomer = await Customers.findByIdAndDelete(req.params.id);
    if (!deleteCustomer) return res.status(404).send("Customer doest exist");
    res.status(200).send("Customer been deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("", /*userAuthenticate,*/ async (req, res) => {
  try {
    // const userInfo = await User.findOne({ email: req.user.sub });
    // if (!userInfo) return res.status(404).send("User doest exist");
    // const findCustomers = await Customers.find({ user_id: userInfo.id });
    const findCustomers = await Customers.find({});/*Temporary*/
    // if (!findCustomers) return res.status(404).send("User has no registered businesses");
    res.status(200).json(findCustomers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
