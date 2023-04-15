const mongoose = require("mongoose");

const employee = new mongoose.Schema({
    full: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
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
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    birthday: {
        type: Date,
        require: true
    }
    // user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});


module.exports = mongoose.model("Employee", employee);
