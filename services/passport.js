const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config/keys');

const mongoose = require('mongoose');
const UserModel = mongoose.model('user');

/**
 * http://www.passportjs.org/docs/configure
 * @type {[type]}
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id, (err, user) => {
    done(err, user);
  });
});

/**
 * https://github.com/mstade/passport-google-oauth2
 * @type {GoogleStrategyOptions}
 */
const googleOauthOptions = {
  clientID: config.googleClientID,
  clientSecret: config.googleClientSecret,
  callbackURL: '/auth/google/callback'
};
const googleOauthAccess = (accessToken, refreshToken, profile, done) => {
  UserModel.findOne({ googleId: profile.id })
    .then(existUser => {
      if (existUser) return done(null, existUser);
      new UserModel({ googleId: profile.id })
        .save()
        .then(user => {
          return done(null, existUser);
        })
        .catch(error => {
          return done(error, false);
        });
    })
    .catch(error => {
      return done(error, false);
    });
};

const googleOauth = new GoogleStrategy(googleOauthOptions, googleOauthAccess);

//config passport
passport.use(googleOauth);
