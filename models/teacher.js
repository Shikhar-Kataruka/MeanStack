var mongoose = require("mongoose");//Getting the mongoose dependency

var teacherSchema = new mongoose.Schema({

fName: {
                type: String,
                required:true
        },
lName  :{
                type:String,
                required:true
        },
age     :{
                type:Number,
                required:true
        },
gender :{
                type:String,
                required:true
    },
phoneNo: {
                type:Number,
                required:true
        }          
});

module.exports = mongoose.model("teacher",teacherSchema);