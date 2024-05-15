const express = require('express');
const router = express.Router();
const { auth, authlist, update, authenticateToken } = require('../controllers/auth.controller');
router.get('/auth', authenticateToken,auth);
router.get('/authlist', authenticateToken, authlist); // Apply authenticateToken middleware here
router.get('/update', authenticateToken,update);
module.exports = router;
