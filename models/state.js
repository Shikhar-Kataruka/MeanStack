var mongoose = require("mongoose");//Getting the mongoose dependency

var stateSchema = new mongoose.Schema({
  name      :{
              type:String,               //name of the state
              required:true
             },
  population:{
              type:Number,              //population of the state
              required:true
             },
  landArea:      {
              type:Number,             //area of the state
              required:true
             },
  density:   {
              type:Number,            //density of people living in the state
              required:true
             },
  religion: [{
               name:{                 //religions present in the particular state
                     type:String,
                     required:true
                    }
             }],

  language:[{
               name:{
                   type:String,       //languages present in a particular state
                   required:true
               }
            }],
  
  regionId :{
              type:String,        //uniqueId of the region under which the particular state falls
              required:true
            }  
});

module.exports = mongoose.model("state",stateSchema);