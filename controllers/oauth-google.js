const passport = require('passport');
module.exports.googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email']
});

module.exports.googleAuthCallback = passport.authenticate('google');
