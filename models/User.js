const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleID : String,
  name: String,
  credits: { type: Number, default: 0 }
});

mongoose.model('User', UserSchema);
