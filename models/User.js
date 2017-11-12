const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
  googleId: { type: String, unique: true }
});

mongoose.model('user', UserSchema);
