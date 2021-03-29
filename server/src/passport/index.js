const local = require('./local');
const Users = require('../models/User');

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Users.findOne({ email: id }, (err, user) => {
      if (err) return done(err);
      return done(null, user);
    })
  });
  
  local(passport);
}