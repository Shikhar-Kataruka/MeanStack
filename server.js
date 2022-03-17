const express = require('express');
const app = express();
const mongoose  = require('mongoose');
var studentRoutes = require("./routes/student");
var authRoutes = require("./routes/auth");
var schoolAnalyticsRoutes = require("./routes/schoolAnalytics");
var analyticsRoutes = require("./routes/analytics");
const cors=require('cors');
var passport    = require("passport");
var user        = require("./models/user");
var LocalStrategy = require("passport-local");
app.use(cors());
const PORT = 8000;

app.use(express.json());
app.use(express.static('client'));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));

mongoose.connect('mongodb+srv://Shikhar:9350072588@cluster0.bcfzo.mongodb.net/data?retryWrites=true&w=majority',{ useNewUrlParser:true, useUnifiedTopology: true})
mongoose.connection.on('connected',()=>{console.log("conneted to mongodb ")
})
mongoose.connection.on('error',(err)=>{
    console.log("not connected",err)
}) 
app.use(studentRoutes);
app.use(authRoutes);
app.use(analyticsRoutes);
app.use(schoolAnalyticsRoutes);
app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})