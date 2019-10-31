const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Route /test works'));

module.exports = router;
