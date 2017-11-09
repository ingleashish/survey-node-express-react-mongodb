const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 5000;

// app.get('/', (req, res)=>{
//   res.send({'name': 'Ashish'});
// });




passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log(`user accessToken is : ${accessToken}`);
    console.log(profile)
  })
);

app.get('/auth/google/', passport.authenticate('google',{
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT, ()=>{
  console.log(`Started server on port ${PORT}`);
});
