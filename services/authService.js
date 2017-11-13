const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});


passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    // console.log(`user accessToken is : ${accessToken}`);
     //console.log(profile)
    User.findOne({googleID : profile.id})
      .then((existingUser) => {
        if(existingUser) {
          console.log(existingUser);
          done(null, existingUser);
        } else {
          new User({
            googleID : profile.id,
            name: profile.displayName
          }).save().then((newUser) => {
            console.log(newUser);
            done(null, newUser);
          });
        }
      });
  })
);
