const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/User');

module.exports = passport => {
  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: true
    },
    async (username, password, done) => {
      User.findOne({ email: username }, async (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'Incorrect username.' });
        const result = await bcrypt.compare(password, user.password);
        if (!result) return done(null, false, { message: 'Incorrect password.' });
        return done(null, user);
      })
    }
  ));
};