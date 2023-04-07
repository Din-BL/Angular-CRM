const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/dev');
const joi = require('joi');
const bcrypt = require('bcrypt');

module.exports = {
    login: async function (req, res, next) {
        try {
            const schema = joi.object({
                email: joi.string().required().min(6).max(256).email(),
                password: joi.string().required().min(6).max(1024),
            });

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'Unauthorized';
            }

            const user = await User.findOne({ email: value.email });
            if (!user) throw Error;
            const validPassword = await bcrypt.compare(value.password, user.password);
            if (!validPassword) throw 'Invalid password';

            const param = { email: value.email };
            const token = jwt.sign(param, config.jwt_token, { expiresIn: '72800s' });

            res.json({
                token: token,
                id: user._id,
                email: user.email,
                name: user.name,
            });
        }
        catch (err) {
            console.log(`Error: ${err}`);
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
    },

    signup: async function (req, res, next) {
        try {
            const schema = joi.object({
                name: joi.string().required().min(2).max(256),
                email: joi.string().min(6).max(256).required().email(),
                password: joi.string().min(6).max(1024).required(),
            });

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error sign up new user';
            }

            const user = await User.findOne({ email: value.email });
            if (user) {
                return res.status(400).json({ error: "User already registered." });
            }

            const hash = await bcrypt.hash(value.password, 10);

            const newUser = new User({
                name: value.name,
                email: value.email,
                password: hash,
            });

            await newUser.save();

            res.json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            })
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: 'error sign up new user' });
        }
    },
}
