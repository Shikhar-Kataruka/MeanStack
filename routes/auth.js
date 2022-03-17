require('dotenv').config();
const express = require('express')
var router    = express.Router();
const app     = express();
const jwt     = require('jsonwebtoken');
var user      = require("../models/user");
var allData   = require("../models/allData");
var passport  = require("passport");
let refreshTokens = [];

router.post("/register", function (req, res) {
  console.log(req.body);
    var newUser = new user({username :req.body.username,phoneNo:req.body.phoneNo,userType:req.body.userType,userId:req.body.userId});
    console.log(newUser);
    user.register(newUser, req.body.password, function(err, user){
        if(err)
        {
          console.log(err)            
          res.send({message:"Try Again"});
        }
        else {
          console.log(user);
        passport.authenticate('local')(req, res, function(){
          res.send({message:"Registration Successful"}); 
       });
      }
    });





});

router.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  req.logout();
  res.sendStatus(204)
})

router.post('/login', passport.authenticate("local", { session: false }), async function (req, res) {
  console.log(req.body.username);
  var userdata = await user.find({ username: req.body.username });
  console.log(userdata.username);
  const users = { name: userdata[0].username }
  const accessToken = generateAccessToken(users)
  res.send({ username:userdata[0].username,accessToken:accessToken,userType:userdata[0].userType,userId:userdata[0].userId,name:userdata[0].name});
})

function generateAccessToken(user) {
  return jwt.sign(user, "260493564b7ee8d8ba3775f07708b1e236b6cb1671b66b4909dd44b820e69c39c4ac740f3ea5be9a56e385ef24e7c4b035dfa25c924c50997dfe4c37e0cb027c", { expiresIn: '15m' })
}

module.exports = router;

/*

function generateAccessToken(user) {
  return jwt.sign(user, "260493564b7ee8d8ba3775f07708b1e236b6cb1671b66b4909dd44b820e69c39c4ac740f3ea5be9a56e385ef24e7c4b035dfa25c924c50997dfe4c37e0cb027c", { expiresIn: '15m' })
}

module.exports = router;

/*else if(loggedIn &&($localStorage.userType === "school")) {
            var allowePage = $.inArray($location.path(), schoolPage) === 1;
            if (allowPage) {
                $location.path();
            }
        } */