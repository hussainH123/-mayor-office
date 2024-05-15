const express = require('express');
const router = express.Router();
const {refreshToken} = require('../controllers/refresh_token.controller');
router.get('/refreshToken', refreshToken);
module.exports = router;