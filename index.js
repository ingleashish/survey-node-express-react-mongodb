const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
mongoose.Promise = global.Promise;

require('./models/User')
require('./services/authService');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 12 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

authRoutes(app);


app.listen(PORT, ()=>{
  console.log(`Started server on port ${PORT}`);
});
