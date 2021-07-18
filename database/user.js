const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  dateAdded: { type: Date, default: Date.now },
  email: { type: String, require: true, unique: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  middleName: { type: String },
  isActive: { type: Boolean, default: true },
  profileImage: String,
  pin: { type: String, require: true },
  username: { type: String, require: true },
});

userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName[0]}`;
});
module.exports = mongoose.model('user', userSchema);
