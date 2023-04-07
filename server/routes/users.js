var express = require('express');
var router = express.Router();
const users = require('../controllers/users');

/* authentication */
router.post('/login', users.login);
router.post('/signup', users.signup);

module.exports = router;
