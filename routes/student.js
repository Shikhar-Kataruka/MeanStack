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


//Response to API call for finding all the student details
router.get("/studentDetail",async function (req, res) {
    var search_el = req.query.searchData;
    console.log(search_el+"18");
     if(search_el==undefined){
         res.send({message:"Enter a correct value"});
     } 
    try {
        //const searchedData = await studentData.find({ "school": search_el });
        console.log(await studentData.find({ "school": search_el }));
        if (searchedData.length) {
            console.log(searchedData);
            res.send(searchedData);
        }
        else {
            res.send({ message:"Not found"});
        }
    }catch(err){
       res.send({message:err});
    }
});

//Response to API call for inserting student details
router.post("/studentDetails",async function (req, res) {
    if(req.body == undefined){
        res.send({message:"Enter a correct value"});
    }
    console.log(req.body);
    const newStudent =new studentData({
        fName  :req.body.fName,
        lName  :req.body.lName,
        phoneNo:req.body.phoneNo,
        boards: req.body.boards,
        school :req.body.school,
        class  :req.body.std,
        subject: req.body.subject,
        gender: req.body.gender,
        address:req.body.address,
        age:parseInt(req.body.age)
    });
    try{
        const savedStudent = await newStudent.save();
        console.log(savedStudent);
     res.send(savedStudent);
    } catch (err) {
        console.log(err);
    res.send({message:err});
    }
});

//Response to API call for searching a specific student(s) 
router.get("/searchstudent",async function (req, res) {
    let search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }
    search_el=search_el.split(",");
    try{
        const searchedStudent = await studentData.find({ rollNo: { $in: search_el } });
        console.log(searchedStudent);
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
        const deletedStudent = await studentData.deleteMany({ rollNo: { $in: deleted } });
        console.log(deletedStudent);
        res.json(deletedStudent);
    }catch(err){
        res.send({message:err});
        }
});


























//bulk insertion API
/*
router.post("/bulkInsertion",function (req, res) {
    bulk = studentData.collection.initializeOrderedBulkOp();
    var schoolData=[{}];
    var std     = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    var gender  = ["male","female","others"];
    var teacher =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var age     =[7,8,9,10,11,12,13,14,15,16,17,18];
    console.log(schoolData[0]);
    for(var counter=1;counter<50001;counter++){
        const genderRandom = Math.floor((Math.random() * gender.length));
        const classRandom  = Math.floor((Math.random() * std.length));
        const teacherRandom = Math.floor((Math.random() * teacher.length));
        const schoolRandom  = Math.floor((Math.random() * schoolData.length));
        var fname= "shikhar"+counter.toString();
        var lname= "Kataruka"+counter.toString();
        var mobNo =9000000000+counter;
        var uniqueId = shortHash(schoolData[schoolRandom].SchoolName+schoolData[schoolRandom].Pincode)
        var newStudent = { 
                            fName: fname, 
                            lName: lname, 
                            phoneNo: mobNo ,
                            class:std[classRandom],
                            school:[
                                {name:schoolData[schoolRandom].SchoolName,
                                pincode:schoolData[schoolRandom].Pincode,
                                city:schoolData[schoolRandom].City,
                                district:schoolData[schoolRandom].District,
                                state:schoolData[schoolRandom].State,
                                schoolId:uniqueId}
                            ],
                            subject:[
                                      {teacher:[{name:teacher[Math.floor((Math.random() * teacher.length))],id:uniqueId}],name:"English",marks:Math.floor((Math.random() * 100) + 1)},
                                      {teacher:[{name:teacher[Math.floor((Math.random() * teacher.length))],id:uniqueId}],name:"Maths",marks:Math.floor((Math.random() * 100) + 1)},
                                      {teacher:[{name:teacher[Math.floor((Math.random() * teacher.length))],id:uniqueId}],name:"Science",marks:Math.floor((Math.random() * 100) + 1)},
                                      {teacher:[{name:teacher[Math.floor((Math.random() * teacher.length))],id:uniqueId}],name:"SocialScience",marks:Math.floor((Math.random() * 100) + 1)},
                                      {teacher:[{name:teacher[Math.floor((Math.random() * teacher.length))],id:uniqueId}],name:"Hindi",marks:Math.floor((Math.random() * 100) + 1)}
                                   ],
                            gender :gender[genderRandom],
                            age    :age[classRandom]   

                        };
        bulk.insert(newStudent);
        if (counter == 1000)
        {
            bulk.execute();
        }
    }
    bulk.execute();
    res.send("Ok");
});
*/

/*router.get("/bulkInsertion",function (req, res) {
    cursor = studentData.collection.find().batchSize(10000);
    try{
    cursor.on("data", data => console.log(data)); 
    }catch(error){
        res.send({message:error});
    }
});*/

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader;
    console.log(token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, "260493564b7ee8d8ba3775f07708b1e236b6cb1671b66b4909dd44b820e69c39c4ac740f3ea5be9a56e385ef24e7c4b035dfa25c924c50997dfe4c37e0cb027c", (err, user) => {
      console.log(err)
      if (err) return res.redirect("/token")
      req.user = user
      next()
    })
  }
//=============================================//////////////////////////==============================//
module.exports = router;