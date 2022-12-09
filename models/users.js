const mongoose = require("mongoose");
const newSchema = new mongoose.Schema({
  name: {
    type: String,
    default : String,
  },
  email: {
    type: String,
    default : String,
  },
  phone: {
    type: String,
    default : String,
  },
  image: {
    type: String,
    default : String,
  },
  created : {
     type : Date,
     default : String,
     default : Date.now
  },
});
module.exports = mongoose.model("User", newSchema);