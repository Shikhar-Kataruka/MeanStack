var mongoose = require("mongoose");//Getting the mongoose dependency

var studentSchema = new mongoose.Schema({

fName: {
                type: String,
                required:true
        },
lName  :{
                type:String,
                required:true
        },
class  :{
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
                        type: String
                    }
                },
                state: {
                    name: {
                        type: String
                    },
                    name: {
                        type: String
                    }
                },
                city: {
                    name: {
                        type: String
                    },
                    id: {
                        type: String
                    }
                }
            },
school   :{
                type:String,
                required:true
},
subject: [{
                teacher: [{
                        name: {
                                type: String,
                                required: true
                        },
                        id: {
                                type: String
                        }
                }],
                name:{
                        type:String,
                        
                    },
                marks:{
                        type:Number,
                        
                       }
        
         }],
age     :{
                type:Number,
                required:true
        },
gender :{
                type:String,
                required:true
    },
boards :{
        type:String,
        required:true
},
phoneNo: {
                type:Number,
                required:true
        }          
});

module.exports = mongoose.model("students",studentSchema);