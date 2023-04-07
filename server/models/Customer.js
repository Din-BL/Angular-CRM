const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200,
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 12,
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
        unique: true,
    },
    Address: {
        type: String,
        minlength: 6,
        maxlength: 350,
        unique: true,
    },
});

exports.Customer = mongoose.model("customer", customerSchema);