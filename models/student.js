var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

var Student = mongoose.model('Student', schema);

module.exports = Student;
