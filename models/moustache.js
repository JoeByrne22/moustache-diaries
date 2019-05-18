const mongoose = require('mongoose');

const moustacheSchema = mongoose.Schema({
  name: String,
  countryOfOrgin: String,
  bushiness: Number,
  image: String,
  comments: [
    {
      text: String,
      user: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }
  ],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});


moustacheSchema.set('toJSON', {
  virtuals: true
});


const moustacheModel = mongoose.model('Moustache', moustacheSchema);

module.exports = moustacheModel;
