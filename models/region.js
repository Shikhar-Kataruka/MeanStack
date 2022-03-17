    var mongoose = require("mongoose");//Getting the mongoose dependency

    var regionSchema = new mongoose.Schema({
    name   :{
            type:String,         //name of the given region 
            required:true
        },
    population:{
            type:Number,        //populaton of the region
            required:true
        },
    landArea:      { 
            type:Number,       //landArea of the region
            required:true
        },
    density:   {
            type:Number,
            required:true     //population of the region
        },
    religion:[{
            name:{
                type:String,  //religions present in the region
                required:true
                }
    }],
    language:[{
            name:{
                type:String, //languages present in the region
                required:true
            }
    }],
});

    module.exports = mongoose.model("region",regionSchema);