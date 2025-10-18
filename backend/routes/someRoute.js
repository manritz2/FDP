const express = require('express');
const router = express.Router();

// define routes
router.get('/', (req, res) => { res.send('Hello'); });

module.exports = router;