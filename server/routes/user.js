// Dependencies

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const _ = require("lodash");
const config = require("config");
const User = require("../models/user");
const { userValidate, userAuthenticate } = require("../utils/middleware");
const jwt = require("jsonwebtoken");

// Endpoints

router.post("/register", userValidate, async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(_.pick(user, ["_id", "name", "email"]));
  } catch (error) {
    if (error.message.includes("username")) return res.status(400).send("Username already exists");
    if (error.message.includes("email")) return res.status(400).send("Email already exists");
    res.status(400).send(error.message);
  }
});

router.post("/login", userValidate, async (req, res) => {
  try {
    let findUser = await User.findOne({ email: req.body.email });
    if (!findUser) return res.status(404).send("Email doesn't exist");
    if (await bcrypt.compare(req.body.password, findUser.password)) {
      const payload = { sub: req.body.email };
      const token = jwt.sign(payload, config.get("ACCESS_TOKEN_SECRET"));
      findUser = findUser.toObject();
      findUser.token = token;
      res.status(200).json(_.pick(findUser, ["_id", "token"]));
    } else res.status(400).send("Incorrect password");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/", userAuthenticate, async (req, res) => {
  try {
    const userDetails = await User.findOne({ email: req.user.sub });
    if (!userDetails) return res.status(404).send("User doesn't exist");
    res.status(200).json(_.pick(userDetails, ["_id", "username", "email"]));
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
