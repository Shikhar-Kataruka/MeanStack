router.get("/analyticsGender",authenticateToken,async function (req, res) {
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

router.get("/analyticsAge",async function (req, res) {
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
router.get("/areaTopSchool",authenticateToken,async function (req, res) {
    var search_el= req.query.searchdata;
    if(search_el==undefined){
        res.send({message:"Enter a correct value"});
    }   
    try{
        const searchedStudent= await student.aggregate(
            [ 
                {
                    $match: {area:search_el}
                },
                {
                $group: 
                    { 
                      _id: "$school",
                      count: { $sum: 1 }
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
router.get("/areaTopSubject",authenticateToken,async function (req, res) {
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
router.get("/areaTopStudent",authenticateToken, async function (req, res) {
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
router.get("/schoolTopStudent",authenticateToken,async function (req, res) {
    var search_el=req.query.searchdata;
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
router.get("/schoolTopSubject",authenticateToken,async function (req, res) {
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
router.get("/classTopStudent",authenticateToken, async function (req, res) {
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

router.get("/classTopSubject",authenticateToken,async function (req, res) {
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