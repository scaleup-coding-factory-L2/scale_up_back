const express = require('express');
const { login } = require('../controllers/LoginController');

const router = express.Router();

router.get('/', login)

module.exports = router;