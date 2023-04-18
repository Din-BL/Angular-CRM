const mongoose = require("mongoose");

const customer = new mongoose.Schema({
  first: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  last: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    match: /^\S+@\S+\.\S+$/,
  },
  address: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});


module.exports = mongoose.model("Customer", customer);
