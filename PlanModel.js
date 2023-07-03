const mongoose = require('mongoose');
const planSchema = new mongoose.Schema({
   title: {
      type: String,
      require: true
   }
})

module.exports = mongoose.model('Plan', planSchema);
