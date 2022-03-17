
const mongoose = require('mongoose');

var passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique :true
    },
  phoneNo:{
      type:String,
      required:true
  },
  userType: {
    type: String,
    required:true
  },
  userId: {
    type: String,           //ID registered in the database
    required:true
  }
});
userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("user",userSchema);
