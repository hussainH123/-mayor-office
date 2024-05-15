const express = require('express');
const router = express.Router();
const {login} = require('../controllers/login.controller');
router.get('/login', login);
module.exports = router;