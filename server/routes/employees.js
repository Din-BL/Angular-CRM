const express = require('express');
const router = express.Router();
const employees = require('../controllers/employees');

router.get('/', employees.getAll);
router.get('/:id', employees.getOne);

router.post('/', employees.addNew);
router.put('/:id', employees.updateDetails);
router.delete('/:id', employees.deleteOne);

module.exports = router;
