const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hi'); // 해당 페이지에 맞게 라우팅할 예정.
})

router.use('/auth', require('./auth'));

module.exports = router;