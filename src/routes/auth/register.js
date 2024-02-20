const express = require('express');
const registerStudent = require('../../controllers/auth/registerController');

const router = express.Router();

router.post('/', registerStudent);

module.exports = router;
