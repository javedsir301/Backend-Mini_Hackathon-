const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  }
});

const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);
module.exports = FormDataModel;