const joi = require('joi');
const { Employee } = require('../models/Employee');

module.exports = {
    getAll: async function (req, res, next) {
        try {
            const result = await Employee.find({});
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting employees' });
        }
    },

    getOne: async function (req, res, next) {
        try {
            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw `error get details`;
            }

            const employee = await Employee.findById(value.id);
            if (!employee) throw "Invalid employee id, no such employee.";
            res.json(employee);
        }
        catch (err) {
            res.status(400).json({ error: "Invalid data" });
            console.log(`Error: ${err}`);
        }
    },

    addNew: async function (req, res, next) {
        try {
            const schema = joi.object({
                name: joi.string().min(2).max(200).required(),
                phone: joi.string().min(9).max(12).required(),
                email: joi.string().min(6).max(255).required(),
                birthday: joi.string(),
            });

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error add employee';
            }

            const employee = new Employee(value);
            const newEmployee = await employee.save();
            res.json(newEmployee);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error adding employee` });
        }
    },

    updateDetails: async function (req, res, next) {
        try {
            const schema = joi.object({
                name: joi.string().min(2).max(200),
                phone: joi.string().min(9).max(12),
                email: joi.string().min(6).max(255),
                birthday: joi.string(),
            }).min(1);

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error updating employee';
            }

            const filter = {
                _id: req.params.id
            };

            const employee = await Employee.findOneAndUpdate(filter, value);
            if (!employee) throw "No employee with this ID in the database";
            const updated = await Employee.findById(employee._id);
            res.json(updated);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error updating details` });
        }
    },

    deleteOne: async function (req, res, next) {
        try {
            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw `error delete employee`;
            }

            const deleted = await Employee.findOneAndRemove({
                _id: value.id
            });

            if (!deleted) throw "failed to delete";
            res.json(deleted);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error delete employee` });
        }
    },
}