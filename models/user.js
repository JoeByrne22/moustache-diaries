const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String
});

userSchema.pre('save', function() {
  this.password = bcrypt.hashSync(this.password, 8);
});

userSchema.virtual('moustacheCreated', {
  ref: 'Moustache',
  localField: '_id',
  foreignField: 'createdBy'
});

userSchema.set('toJSON', {
  virtuals: true
});

userSchema.methods.validatePassword = function(attemptedPassword) {
  console.log('this is this password', this.password, 'this is attempted', attemptedPassword);
  return bcrypt.compareSync(attemptedPassword, this.password);
};

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
