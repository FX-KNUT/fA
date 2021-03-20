const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res, next) => {
  return res.json('Hi.');
});

router.post('/signup', async (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  await User.findOne({ where: { email } }, async (err, user) => {
    if (err) {
      console.error(err.message);
      return next(err);
    }
    if (user) return res.status(403).json('Already existed.');
    const hashed = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashed });
    return res.json('Successfully signed up.');
  })
});

router.post('/login', async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err.message);
      return next(err);
    }
    if (!user) return res.redirect('/login');
    req.logIn(user, err => {
      if (err) return next(err);
      return res.redirect('/');
    })
  })(req, res, next);
});

router.post('/logout', async (req, res, next) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;