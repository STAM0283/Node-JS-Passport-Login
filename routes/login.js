const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.end('Welcome into my app ');
});

module.exports = router;
