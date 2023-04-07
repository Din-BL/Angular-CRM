const express = require('express');
const router = express.Router();
const customers = require('../controllers/customers');

router.get('/', customers.getAll);
router.get('/:id', customers.getOne);

router.post('/', customers.addNew);
router.put('/:id', customers.updateDetails);
router.delete('/:id', customers.deleteOne);

module.exports = router;
