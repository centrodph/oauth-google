const passport = require('passport');
const passportConfig = require('../services/passport');
module.exports.googleAuth = passport.authenticate('google', {
  scope: ['profile', 'email']
});

module.exports.googleAuthCallback = (req, res) => {
  console.log(req);
  res.send({ result: 'works' });
};
