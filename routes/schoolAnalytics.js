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
router.get("/schoolAverage",authenticateToken,async function (req, res) {
   var search_el= req.query.searchdata;
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     } 
     try{
         const searchedRegion= await studentData.aggregate(
             [
                 
                 {
                     $match: { "school": search_el.toString()}
                        
                 },
                 {
                     $project:
                     {
                         _id: 1,
                         fName: 1,
                         school:1,
                         totalMarks: {
                             $sum: {
                                 $sum: "$subject.marks"
                             }
                            
                         }
                     }
                 },
                {
                    "$group":
                     {
                        "_id": null,
                        "average": {
                            $avg: "$totalMarks"
                            
                        }
                    }
                 
                }  
             ]
         );
         var send = searchedRegion[0].average;
         res.send(send.toString());
     }catch(err){
        res.send({message:err});
        }
});

router.get("/schoolSubjectAverage",authenticateToken,async function (req, res) {
     var search_el= req.query.searchdata;
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     }  
     try{
         const searchedRegion= await studentData.aggregate(
             [
               
                {
                    $match: { "school": search_el.toString() }
                       
                 },
                 {
                    $unwind: "$subject"
                },
                {
                    "$group":
                     {
                        "_id": {
                            subject:"$subject.name"
                        },
                        "average": {
                            $avg: "$subject.marks"
                            
                        }
                    }
                 }
             ]
         );
         if(searchedRegion.length)
             res.send(searchedRegion);
         else {
             res.send("No result found")
         }
     }catch(err){
        res.send({message:"No Result Found"});
        }
      
});
router.get("/rankSchoolRegion",authenticateToken,async function (req, res) {
    var value = req.query.value;
    console.log(value);
    var boards = req.query.boards;
    var compare = req.query.average;
    compare = Math.floor(parseInt(compare));
     if((value==undefined)||(boards==undefined)||(compare==undefined)){
         res.send({message:"Enter a correct value"});
     } 
     try{
         const searchedRegion= await studentData.aggregate(
             [
                 {
                     $unwind: "$address"
                 },
                 { $match: { $and: [{ "address.region.name": value },{"boards":boards}] } },

                 {
                     $project:
                     {
                         _id: 1,
                         fName: 1,
                         school:1,
                         totalMarks: {
                             $sum: {
                                 $sum: "$subject.marks"
                             }
                            
                         }
                     }
                 },
                {
                    "$group":
                     {
                        "_id": {
                            school:"$school"
                        },
                        "average": {
                            $avg: "$totalMarks"
                            
                        }
                    }
                 },
                 {
                     "$group":
                     {
                         "_id": null,
                         Below: {
                             "$sum": {
                                 "$cond": [
                                     { "$lt": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         Equal: {
                             "$sum": {
                                 "$cond": [
                                     { "$eq": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         above: {
                             "$sum": {
                                 "$cond": [
                                     { "$gt": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         total: { "$sum": 1 }
                     }
                 }  
             ]
             );
             if(searchedRegion.length)
             {
                var data = [];
                data.push({ type: "Below", quantity: searchedRegion[0].Below });
                data.push({ type:"Equal",quantity: searchedRegion[0].Equal });
                data.push({ type:"Above",quantity: searchedRegion[0].above });
                res.send(data);
             }
         else {
             res.send("No result found")
         }
     }catch(err){
        res.send({message:err});
        }
      
});
router.get("/rankSchoolState",authenticateToken,async function (req, res) {
    var value = req.query.value;
    var boards = req.query.boards;
    var compare = req.query.average;
    compare = Math.floor(parseInt(compare));
    console.log(req.query);
     if((value==undefined)||(boards==undefined)||(compare==undefined)){
         res.send({message:"Enter a correct value"});
     } 
     try{
         const searchedRegion= await studentData.aggregate(
             [
                 {
                     $unwind: "$address"
                 },
                 { $match: { $and: [{ "address.state.name": value },{"boards":boards}] } },

                 {
                     $project:
                     {
                         _id: 1,
                         fName: 1,
                         school:1,
                         totalMarks: {
                             $sum: {
                                 $sum: "$subject.marks"
                             }
                            
                         }
                     }
                 },
                {
                    "$group":
                     {
                        "_id": {
                            school:"$school"
                        },
                        "average": {
                            $avg: "$totalMarks"
                            
                        }
                    }
                 },
                 {
                     "$group":
                     {
                         "_id": null,
                         Below: {
                             "$sum": {
                                 "$cond": [
                                     { "$lt": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         Equal: {
                             "$sum": {
                                 "$cond": [
                                     { "$eq": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         above: {
                             "$sum": {
                                 "$cond": [
                                     { "$gt": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         total: { "$sum": 1 }
                     }
                 }  
             ]
             );
             if(searchedRegion.length)
             {
                var data = [];
                data.push({ type: "Below", quantity: searchedRegion[0].Below });
                data.push({ type:"Equal",quantity: searchedRegion[0].Equal });
                data.push({ type:"Above",quantity: searchedRegion[0].above });
                res.send(data);
}         else {
             res.send("No result found")
         }
     }catch(err){
        res.send({message:err});
        }
      
});
router.get("/rankSchoolCity",authenticateToken,async function (req, res) {
    var value = req.query.value;
    var boards = req.query.boards;
    var compare = req.query.average;
    compare = Math.floor(parseInt(compare));
     if((value==undefined)||(boards==undefined)||(compare==undefined)){
         res.send({message:"Enter a correct value"});
     } 
    try {
        const searchedRegion = await studentData.aggregate(
            [
                {
                    $unwind: "$address"
                },
                { $match: { $and: [{ "address.city.name": value },{"boards":boards}] } },

                {
                    $project:
                    {
                        _id: 1,
                        fName: 1,
                        school: 1,
                        totalMarks: {
                            $sum: {
                                $sum: "$subject.marks"
                            }
                            
                        }
                    }
                },
                {
                    "$group":
                    {
                        "_id": {
                            school: "$school"
                        },
                        "average": {
                            $avg: "$totalMarks"
                            
                        }
                    }
                },
                {
                    "$group":
                    {
                        "_id": null,
                        Below: {
                            "$sum": {
                                "$cond": [
                                    { "$lt": [compare, "$average"] },
                                    1,
                                    0
                                ]
                            }
                        },
                        Equal: {
                            "$sum": {
                                "$cond": [
                                    { "$eq": [compare, "$average"] },
                                    1,
                                    0
                                ]
                            }
                        },
                        above: {
                            "$sum": {
                                "$cond": [
                                    { "$gt": [compare, "$average"] },
                                    1,
                                    0
                                ]
                            }
                        },
                        total: { "$sum": 1 }
                    }
                }
            ]
        );
        if (searchedRegion.length) {
            var data = [];
             data.push({ type: "Below", quantity: searchedRegion[0].Below });
             data.push({ type:"Equal",quantity: searchedRegion[0].Equal });
             data.push({ type:"Above",quantity: searchedRegion[0].above });
             res.send(data);
        }
    else {
        res.send("No result found")
    }
    } catch (err) {
        res.send({ message: err });
    }
      
});
router.get("/rankSchoolSubjectRegion",authenticateToken,async function (req, res) {
    var value = req.query.value;
    var boards = req.query.boards;
    var compare = req.query.average;
    const subject = req.query.subject;
    compare = Math.floor(parseInt(compare));
    console.log(req.query);
     if((value==undefined)||(boards==undefined)||(compare==undefined)||subject==undefined){
         res.send({message:"Enter a correct value"});
     } 
     try{
         const searchedRegion= await studentData.aggregate(
             [
                 {
                     $unwind: "$address"
                 },
                 {
                    $unwind: "$subject"
                },
                { $match: { $and: [{ "address.region.name": value }, { "subject.name": subject },{"boards":boards}] } },
                 {
                     $project:
                     {
                         _id: 1,
                         fName: 1,
                         school:1,
                         totalMarks: "$subject.marks"
                                
                     }
                 },
                {
                    "$group":
                     {
                        "_id": {
                            school:"$school"
                        },
                        "average": {
                            $avg: "$totalMarks"
                            
                        }
                    }
                 },
                 {
                     "$group":
                     {
                         "_id": null,
                         Below: {
                             "$sum": {
                                 "$cond": [
                                     { "$lt": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         Equal: {
                             "$sum": {
                                 "$cond": [
                                     { "$eq": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         above: {
                             "$sum": {
                                 "$cond": [
                                     { "$gt": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         total: { "$sum": 1 }
                     }
                 }  
             ]
         );
         if (searchedRegion.length) {
             var data = [];
             data.push({ type: "Below", quantity: searchedRegion[0].Below });
             data.push({ type:"Equal",quantity: searchedRegion[0].Equal });
             data.push({ type:"Above",quantity: searchedRegion[0].above });
             res.send(data);
         }
         else {
             res.send("No result found")
         }
     }catch(err){
        res.send({message:"No Result Found"});
        }
      
});
router.get("/rankSchoolSubjectState",authenticateToken,async function (req, res) {
    var value = req.query.value;
    var boards = req.query.boards;
    var compare = req.query.average;
    const subject = req.query.subject;
    compare = Math.floor(parseInt(compare));
     if((value==undefined)||(boards==undefined)||(compare==undefined)||subject==undefined){
         res.send({message:"Enter a correct value"});
     } 
     try{
         const searchedRegion= await studentData.aggregate(
             [
                 {
                     $unwind: "$address"
                 },
                 { $match: { $and: [{ "address.state.name": value }, { "subject.name": subject },{"boards":boards}] } },

                 {
                     $project:
                     {
                         _id: 1,
                         fName: 1,
                         school:1,
                         totalMarks: {
                             $sum: {
                                 $sum: "$subject.marks"
                             }
                            
                         }
                     }
                 },
                {
                    "$group":
                     {
                        "_id": {
                            school:"$school"
                        },
                        "average": {
                            $avg: "$totalMarks"
                            
                        }
                    }
                 },
                 {
                     "$group":
                     {
                         "_id": null,
                         Below: {
                             "$sum": {
                                 "$cond": [
                                     { "$lt": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         Equal: {
                             "$sum": {
                                 "$cond": [
                                     { "$eq": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         above: {
                             "$sum": {
                                 "$cond": [
                                     { "$gt": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         total: { "$sum": 1 }
                     }
                 }  
             ]
             );
if(searchedRegion.length)
{
    var data = [];
             data.push({ type: "Below", quantity: searchedRegion[0].Below });
             data.push({ type:"Equal",quantity: searchedRegion[0].Equal });
             data.push({ type:"Above",quantity: searchedRegion[0].above });
             res.send(data);
}         else {
             res.send("No result found")
         }     }catch(err){
        res.send({message:err});
        }
      
});
router.get("/rankSchoolSubjectCity",authenticateToken,async function (req, res) {
    var value = req.query.value;
    var boards = req.query.boards;
    var compare = req.query.average;
    const subject = req.query.subject;
    compare = Math.floor(parseInt(compare));
     if((value==undefined)||(boards==undefined)||(compare==undefined)||subject==undefined){
         res.send({message:"Enter a correct value"});
     } 
     try{
         const searchedRegion= await studentData.aggregate(
             [
                 {
                     $unwind: "$address"
                 },
                 { $match: { $and: [{ "address.city.name": value }, { "subject.name": subject },{"boards":boards}] } },

                 {
                     $project:
                     {
                         _id: 1,
                         fName: 1,
                         school:1,
                         totalMarks: {
                             $sum: {
                                 $sum: "$subject.marks"
                             }
                            
                         }
                     }
                 },
                {
                    "$group":
                     {
                        "_id": {
                            school:"$school"
                        },
                        "average": {
                            $avg: "$totalMarks"
                            
                        }
                    }
                 },
                 {
                     "$group":
                     {
                         "_id": null,
                         Below: {
                             "$sum": {
                                 "$cond": [
                                     { "$lt": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         Equal: {
                             "$sum": {
                                 "$cond": [
                                     { "$eq": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         above: {
                             "$sum": {
                                 "$cond": [
                                     { "$gt": [compare, "$average"] },
                                     1,
                                     0
                                 ]
                             }
                         },
                         total: { "$sum": 1 }
                     }
                 }  
             ]
             );
         if (searchedRegion.length) {
            var data = [];
            data.push({ type: "Below", quantity: searchedRegion[0].Below });
            data.push({ type:"Equal",quantity: searchedRegion[0].Equal });
            data.push({ type:"Above",quantity: searchedRegion[0].above });
            res.send(data);
             }
         else {
             res.send("No result found")
         }     }catch(err){
        res.send({message:err});
        }
      
});
router.get("/analyticsSchoolGender", authenticateToken, async function (req, res) {
    var search_el= req.query.searchdata;
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     } 
    try{
        const searchedStudent= await studentData.aggregate(
            [ //school match
                {
                    $match: { "school": search_el.toString()}   
                },
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
        console.log(searchedStudent);
        res.send(searchedStudent);
    }catch(err){
       res.send({message:err});
       }
});
router.get("/analyticsSchoolAge",authenticateToken,async function (req, res) {
    var search_el= req.query.searchdata;
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     } 
    try {
        const searchedStudent = await studentData.aggregate(
            [
                {
                    $match: { "school": search_el.toString()}   
                },
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
        console.log(searchedStudent);
        res.send(searchedStudent);
    }catch(err){
        res.send({message:err});
       }
});
router.get("/analyticsGenderSubject",authenticateToken,async function (req, res) {
    try{
        const searchedStudent= await studentData.aggregate(
            [
                {
                $match: { school: "Bongaigaon 2 public school" }
                },
                {
                    $unwind: "$subject"
                },
                { 
                    "$group": {
                        "_id": { subject:"$subject.name",gender:"$gender"},
                        total: { $sum:1}
                }
            }
            
    ]);
        res.send(searchedStudent);
    }catch(err){
        res.send({message:err});
       }
});
module.exports = router;



function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader;
    console.log(token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, "260493564b7ee8d8ba3775f07708b1e236b6cb1671b66b4909dd44b820e69c39c4ac740f3ea5be9a56e385ef24e7c4b035dfa25c924c50997dfe4c37e0cb027c", (err, user) => {
      console.log(err)
      if (err) res.sendStatus(403)
      req.user = user
      next()
    })
  }
router.post("/testAPI1", (req, res) => {
    
    var cursor = studentData.collection.find();
        var bulk = studentData.collection.initializeUnorderedBulkOp();
        var count = 0;
        var coutnter = 1;
     
        
        cursor.snapshot().forEach(function(document) { 
            bulk.find({ '_id': document._id }).updateOne( {
                '$set': { 'rollNo': coutnter.toString()}
            });
            count++;
            coutnter++;
            if(count%compare0 === 0) {
                // Excecute per compare0 operations and re-init
                bulk.execute();
                bulk = studentData.collection.initializeUnorderedBulkOp();
            }
        })
        
        // clean up queues
        if(count > 0) {
            bulk.execute();
        }
    
})

 /* var cursor = studentData.collection.find();
        var bulk = studentData.collection.initializeUnorderedBulkOp();
        var count = 0;
        var coutnter = 1;
     
        
        cursor.snapshot().forEach(function(document) { 
            bulk.find({ '_id': document._id }).updateOne( {
                '$set': { 'lName':  "kataruka"+coutnter.toString()}
            });
            count++;
            coutnter++;
            if(count%compare0 === 0) {
                // Excecute per compare0 operations and re-init
                bulk.execute();
                bulk = studentData.collection.initializeUnorderedBulkOp();
            }
        })
        
        // clean up queues
        if(count > 0) {
            bulk.execute();
        }
    
        */