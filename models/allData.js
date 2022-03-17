
const mongoose = require('mongoose');

var passportLocalMongoose = require("passport-local-mongoose");

const allSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    },
    userType: {
        type: String,
        required: true
    }
});
allSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("allData",allSchema);
