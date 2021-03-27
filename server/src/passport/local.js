const LocalStrategy = require('passport-local').Strategy;

const Users = require('../models/User');

module.exports = passport => {
  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (username, password, done) => {
      Users.findOne({ email: username }, (err, user) => {
        if (err) return done(err);
        if (!user) done(null, false, { message: 'Incorrect username.'});
        const result = password === user.password;
        if (result) done(null, false, { message: 'Incorrect password.'});
        return done(null, user);
      })
    }

  ))
}