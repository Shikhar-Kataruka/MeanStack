
var   express   = require("express");
var   router    = express.Router();
var   region   = require("../models/region");
var   city   = require("../models/city");
var   state   = require("../models/state");
var   school   = require("../models/school");
var studentData = require("../models/students");
const jwt     = require('jsonwebtoken');
var shortHash = require('short-hash');
const stringHash = require("string-hash");
var allData   = require("../models/allData");
const { createVerify } = require("crypto");
function sleep(milliseconds) {
    new Promise(resolve => setTimeout(resolve, milliseconds))
};
router.post("/allData", async function (req, res) {

        school.aggregate([
            {
                $project: {
                    _id: 1
                }
            }
        ]).then((search) => {
            console.log(search);
            //console.log(search.length)
                var bulk=allData.collection.initializeOrderedBulkOp();
                for (var i = 0; i < search.length; i++){
                    console.log("hi");
                    const newItem = {
                        userId: search[i]._id,
                        userType:"student"
                    }
                     bulk.insert(newItem);
                    if (i == 1000) {
                      bulk.execute();
                    }
                    
                }
                bulk.execute();
        })
})
router.get("/getSchool",async function (req, res) {
    var search_el = req.query.schoolId;
    console.log(search_el);
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
    try{
        const searchedState = await school.findById(search_el);
        console.log(searchedState);
        res.send(searchedState);
    }catch(err){
       res.send({message:err});
       }
});
router.get("/testAPI", async function (req, res) {
    /* var search_el= req.query.searchdata;
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     }  */
    try {
        const searchedRegion = await studentData.aggregate(
            [
                
                /*{
                    $project: {
                        fName: 1,
                        address: 1,
                        "subject.name": {
                            $cond: {
                                if: { $eq: ["$subject.name", "English"] },
                                then: "$subject.name",
                                else: "$$REMOVE"
                            }
                        },
                        "subject.marks": {
                            $cond: {
                                if: { $eq: ["$subject.name", "English"] },
                                then: "$subject.marks",
                                else: "$$REMOVE"
                            }
                        }//{ $eq: [ "$subject.name","English" ] }
                    }
                },*/
                {
                    $unwind: "$address"
                },
                {
                    $unwind: "$subject"
                },
                { $match: { $and: [{ "address.region.name": "North" }, { "subject.name": "English" },{"boards":"cbse"},{"class":"1"}] } },
                {
                    $project: {
                        fName:1,
                        "subject.name":1,
                        "subject.marks":1
                }
                },
                {$sort :{"subject.marks":1}},
                { 
                    "$group": {
                    "_id": null,
                    "Below": { 
                        "$sum": { 
                            "$cond": [
                                { "$lt": [50,"$subject.marks"] },
                               1,
                               0
                            ]
                        }
                        },
                        "Equal": { 
                            "$sum": { 
                                "$cond": [
                                    { "$eq": [50,"$subject.marks"] },
                                   1,
                                   0
                                ]
                            }
                        },
                    "above": { 
                        "$sum": { 
                            "$cond": [
                                { "$gt": [50,"$subject.marks"] },
                               1,
                               0
                            ]
                        }
                    },
                    "total": { "$sum": 1 }
                }
            }
                
               
             ]
             );
         res.send(searchedRegion);
     }catch(err){
        res.send({message:err});
        }
});

router.get("/studentStandingRegion", async function (req, res) {
    /* var search_el= req.query.searchdata;
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     }  */
     try{
         const searchedRegion = await studentData.aggregate(
             [
                 {
                     $unwind: "$address"
                 },
                 {
                     $match: { "address.region.name": "North" }
                        
                 },
                 {
                     $unwind: "$subject"
                 },
                 {
                     "$group":
                     {
                         "_id": "$phoneNo",
                         "Marks": {
                             $sum: {
                                 $sum: "$subject.marks"
                             }
                         }
                     }
                 },
                 { $sort: { Marks: 1 } }
             ]
             );
         res.send(searchedRegion);
     }catch(err){
        res.send({message:err});
        }
});
 
router.get("/studentStandingState", async function (req, res) {
    /* var search_el= req.query.searchdata;
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     }  */
     try{
         const searchedRegion= await studentData.aggregate(
             [
                 {
                     $unwind: "$address"
                 },
                 {
                     $match: { "address.state.name": "North" }
                        
                 },
                 {
                    $unwind: "$subject"
                },
                {
                    "$group":
                     {
                        "_id": "$fName",
                        "totalValue": {
                            $sum: {
                                $sum: "$subject.marks"
                            }
                        }
                    }
                }
                     
             ]
             );
         res.send(searchedRegion);
     }catch(err){
        res.send({message:err});
        }
});
 
router.get("/studentStandingCity", async function (req, res) {
    /* var search_el= req.query.searchdata;
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     }  */
     try{
         const searchedRegion= await studentData.aggregate(
             [
                 {
                     $unwind: "$address"
                 },
                 {
                     $match: { "address.city.name": "North" }
                        
                 },
                 {
                    $unwind: "$subject"
                },
                {
                    "$group":
                     {
                        "_id": "$fName",
                        "totalValue": {
                            $sum: {
                                $sum: "$subject.marks"
                            }
                        }
                    }
                }
                     
             ]
             );
         res.send(searchedRegion);
     }catch(err){
        res.send({message:err});
        }
 });
//testing Api
router.get("/getCities",async function (req, res) {
     var search_el= req.query.stateId;
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     } 
     try{
         const searchedState= await city.aggregate(
            [ 
                {
                $match: 
                    { 
                        "stateId": search_el
                    }
                },
                {
                   $project: 
                       { 
                           _id: 1,
                           name:1
                       }
                   }
            ]
             );
         res.send(searchedState);
     }catch(err){
        res.send({message:err});
        }
 });
router.get("/getStates",async function (req, res) {
     var search_el= req.query.regionId;
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     }
     try{
         const searchedState= await state.aggregate(
             [ 
                 {
                 $match: 
                     { 
                         "regionId": search_el
                     }
                 },
                 {
                    $project: 
                        { 
                            _id: 1,
                            name:1
                        }
                }
             ]
             );
         res.send(searchedState);
     }catch(err){
        res.send({message:err});
        }
 });
router.get("/getRegion",async function (req, res) {
    try{
        const searchedRegion= await region.aggregate(
            [ 
                {
                $project: 
                    { 
                        _id: 1,
                        name:1
                    }
                }
            ]
        );
      //  console.log(searchedRegion);
        res.send(searchedRegion);

    }catch(err){
       res.send({message:err});
       }
});
router.get("/getStateAnal",async function (req, res) {
    try{
        const searchedRegion= await state.aggregate(
            [ 
                {
                $project: 
                    { 
                        _id: 1,
                        name:1
                    }
                }
            ]
        );
      //  console.log(searchedRegion);
        res.send(searchedRegion);

    }catch(err){
       res.send({message:err});
       }
});
router.get("/getCityAnal",async function (req, res) {
    try{
        const searchedRegion= await city.aggregate(
            [ 
                {
                $project: 
                    { 
                        _id: 1,
                        name:1
                    }
                }
            ]
        );
       // console.log(searchedRegion);
        res.send(searchedRegion);

    }catch(err){
       res.send({message:err});
       }
});

/*
router.get("/areaTopSubject",async function (req, res) {
    var search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { area: search_el }
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: "$subject.name",
                      count: { $sum: "$subject.marks" }
                    }
                },
               {
                $sort: { count: -1 } 
               },
               { $limit : 3 }
            ]
            );
        res.send(searchedStudent);
    }catch(err){
       res.send({message:err});
       }
});
router.get("/areaTopStudent", async function (req, res) {
    var search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { area: search_el }
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: {rollNo:"$rollNo",username:"$fName"},
                      average: { $avg : "$subject.marks" }
                    }
                },
            
                {
                    $sort: { average: -1 }
                },
                { $limit : 3 }

            ]
            );
        res.send(searchedStudent);
    }catch(err){
       res.send({message:err});
       }
});
//Response to API call for Analytics on the basis of school
router.get("/schoolStudent",async function (req, res) {
    //var search_el=req.query.searchdata;
    //if(search_el==undefined){
      //  res.send({message:"Enter a correct value"});
    //}
   
    try{
        const searchedStudent= await studentData.aggregate(
            [
                { $unwind: "$address" },
                {
                    $match: { boards:"state"}
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: {username:"$fName"},
                      Marks: { $sum : "$subject.marks" }
                    }
                },
            
                {
                    $sort: { Marks: -1 }
                },
                { $limit : 3 }

            ]
            );
        res.send(searchedStudent);
    }catch(err){
       res.send(err);
       }
});
router.get("/schoolTopSubject",async function (req, res) {
    var search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { school:search_el}
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: "$subject.name",
                      count: { $sum: "$subject.marks" }
                    }
                },
               {
                $sort: { count: -1 } 
               },
               { $limit : 3 }
            ]
            );
         console.log(searchedStudent);                               
        res.send(searchedStudent);
    }catch(err){
           console.log(err);
       res.send({message:err});
       }
});

//Response to API call for Analytics on the basis of class
router.get("/classTopStudent", async function (req, res) {
    var search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { class: search_el }
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: {rollNo:"$rollNo",username:"$fName"},
                      average: { $avg : "$subject.marks" }
                    }
                },
            
                {
                    $sort: { average: -1 }
                },
                { $limit : 3 }

            ]
            );
        res.send(searchedStudent);
    }catch(err){
       res.send({message:err});
       }
});

router.get("/classTopSubject",async function (req, res) {
    var search_el= req.query.searchdata;
    search_el=search_el.toString();
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: { class :search_el }
                },
                { $unwind: "$subject" },
                {
                    $group: 
                    { 
                      _id: "$subject.name",
                      count: { $sum: "$subject.marks" }
                    }
                },
               {
                $sort: { count: -1 } 
               },
               { $limit : 3 }
            ]
            );
        res.send(searchedStudent);
    }catch(err){
        res.send({message:err});
       }
});
//Response to API call for searching a specific student(s) 
router.get("/searchstudent", async function (req, res) {
    let search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
    search_el=search_el.split(",");
    try{
        const searchedStudent= await student.find({rollNo:{$in:search_el}});
        res.send(searchedStudent);
    }catch(err){
       res.send({message:err});
       }
});
//response route to API call for deleting a student entry
router.delete("/deletestudent",async function (req, res) {
    var deleted=req.query.deletedata;
    if(deleted==undefined){
        res.send({message:"Enter a correct value"});
    }
    deleted=deleted.split(",");
    try{
        const deletedStudent= await student.remove({rollNo:deleted});
        res.json(deletedStudent);
    }catch(err){
        res.send({message:err});
        }
    });
//Api call for analytics on the basis of gender

router.get("/analyticsGenderr",async function (req, res) {
    try{
        const searchedStudent= await studentData.aggregate(
            [ 
                { 
                    "$group": {
                    "_id": null,
                    "male": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": ["male","$gender"] },
                               1,
                               0
                            ]
                        }
                    },
                    "female": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": ["female","$gender"] },
                               1,
                               0
                            ]
                        }
                    },
                    "others": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": ["others","$gender"] },
                               1,
                               0
                            ]
                        }
                    },
                    "total": { "$sum": 1 }
                }
            } 
            ]);
        res.send(searchedStudent);
    }catch(err){
       res.send({message:err});
       }
});
//Api call for analytics on the basis of gender

router.get("/analyticsAgee",async function (req, res) {
    try{
        const searchedStudent= await studentData.aggregate(
            [ 
                { 
                    "$group": {
                    "_id": null,
                    "seven": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [7,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "eight": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [8,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "nine": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [9,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "ten": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [10,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "eleven": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [11,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "twelve": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [12,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "thirteen": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [13,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "fourteen": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [14,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "fifteen": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [15,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "sixteen": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [16,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "seventeen": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [17,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "eighteen": { 
                        "$sum": { 
                            "$cond": [
                                { "$eq": [18,"$age"] },
                               1,
                               0
                            ]
                        }
                    },
                    "total": { "$sum": 1 }
                }
            }
            
    ]);
        res.send(searchedStudent);
    }catch(err){
        res.send({message:err});
       }
});
    */        
module.exports = router;
    

    