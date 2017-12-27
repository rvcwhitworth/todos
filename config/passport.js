const LocalStrategy = require('passport-local').Strategy;
const User = require('../database/mongo');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, pass, done) {
    process.nextTick(() => {
      User.findOne({ username: username }, (err, user) => {
        if (err) return done(err);
        
        if (user) {
          // return
        }
      })
    })
  }))
}