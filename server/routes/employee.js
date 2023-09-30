// Dependencies

const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");
const User = require("../models/user");
const fs = require("fs");
const { userAuthenticate } = require("../utils/middleware");

// Endpoints

router.post("/init", (req, res) => {
    try {
        fs.readFile("./seeds/employees.json", "utf8", async (err, data) => {
            if (err) res.json(err);
            else {
                await Employee.deleteMany({});
                const employeeData = JSON.parse(data);
                await Employee.insertMany(employeeData.employees);
                res.status(200).json('Inserted employees')
            }
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("", userAuthenticate, async (req, res) => {
    try {
        const userInfo = await User.findOne({ email: req.user.sub });
        if (!userInfo) return res.status(404).send("User doesn't exist");
        const findEmployees = await Employee.find({});
        if (!findEmployees) return res.status(404).send("User has no registered employees");
        res.status(200).json(findEmployees);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;