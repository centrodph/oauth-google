const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config/keys');
/**
 * https://github.com/mstade/passport-google-oauth2
 * @type {GoogleStrategy}
 */
const googleOauthOptions = {
  clientID: config.googleClientID,
  clientSecret: config.googleClientSecret,
  callbackURL: '/auth/google/callback'
};
const googleOauth = new GoogleStrategy(
  googleOauthOptions,
  (request, accessToken, refreshToken, profile, done) => {
    console.log(
      '6666666666666666666666666666666666666666666666666666666666666'
    );
    console.log(request, accessToken, refreshToken, profile, done);
  }
);

//config passport
passport.use(googleOauth);
