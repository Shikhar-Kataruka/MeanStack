var mongoose = require("mongoose");//Getting the mongoose dependency
var schoolSchema = new mongoose.Schema({
    name  : {
                type:String,
                required:true
            },
    contact:{
                email:{
                       type:String,
                       required:true
                      },
                phoneNo:{
                       type:String,
                       required:true  
                        }
    },

    boards :{
        type:String,
        required:true
    },
    
    address: {
        region: {
            name: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            }
        },
        state: {
            name: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        city: {
            name: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            }
        }
    }

  });
  
  module.exports = mongoose.model("school",schoolSchema);