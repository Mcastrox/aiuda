const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  title: String,
  duracion: String,
  origen: String,
  status: {
    type: Boolean,
    default: false
  },
  fecha : String,
  asueto:String,

});

module.exports = mongoose.model('tasks', TaskSchema);
