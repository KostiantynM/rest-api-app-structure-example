const express = require('express');

const controllers = require('../controllers');

const router = new express.Router();
 
//<POST> <API>/users
router.get('/', controllers.users.getUsersList);
 
router.get('/:userId', controllers.users.getUserById);

module.exports = router;