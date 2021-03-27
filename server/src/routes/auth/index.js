const express = require('express');
const passport = require('passport');

const Users = require('../../models/User');

const router = express.Router();

router.post('/signup', (req, res, next) => {
  const { email, password } = req.user;
  Users.findOne({ email: email }, (err, user) => {
    if (err) return next(err);
    if (user) return res.status(403).json('Already existed.'); // 해당 페이지에 맞게 라우팅 할 예정.
    Users.create({ email, password });
    res.redirect('/signup/success'); // 해당 페이지에 맞게 라우팅 할 예정.
  })
});

router.get('/signup/success', (req, res) => {
  res.json('Successfully signed up.');
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.post('/logout', (req, res) => {
  req.logout();
  req.session.save(() => {
    res.redirect('/');
  })
})

module.exports = router;