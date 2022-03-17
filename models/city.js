var mongoose = require("mongoose");//Getting the mongoose dependency

var citySchema = new mongoose.Schema({
name       :{
              type:String,
              required:true     //name of the city/town
            },
population :{
             type:Number,
             required:true    //population in a city/town
            },
landArea:      {
             type:Number,    //area of a city/town
             required:true
           },
density:   {
            type:Number,     //density present in a city/town
            required:true
           },
religion: [{
         name:{
               type:String,  //religions present in a city/town
               required:true
              },
       }],

language:[{
         name:{
             type:String,  // languages present in a city/town
         }
    }],
pincode:{
        type: Number,
        required: true
        },
stateId :{
              type:String,  // uniqueId of district under which the given city/town
              required:true
          }
});

module.exports = mongoose.model("city",citySchema);