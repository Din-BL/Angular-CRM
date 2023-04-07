const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
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
    birthday: {
        type: Date,
        default: Date.now,
    },
});

exports.Employee = mongoose.model("employee", employeeSchema);