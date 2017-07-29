var express = require("express");
var app = new express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/demo1");

var userSchema = new Schema({
                name: String,
                email:String,
                contact:String
            }, {collection:'users', timestamps:true});

mongoose.model('USER_MODEL', userSchema);

app.use(bodyparser.json());

var  USER = mongoose.model('USER_MODEL');

app.get('/getall_user', function(req, res)  {
    USER.find({}, function (err, docs){
        if(err){
            console.log(err);
        }
        res.json({"success" : true, allItom : docs});
    });
});

app.post('/add_user', function(req, res){
    var user =req.body;
    console.log("request = " + req.body);
    var user = new USER(user);
    user.save(function(err, data) {
        if (err) return console.error(err);
        res.json(data);
    });
});

app.listen("3000",function () {
    console.log("app started on 3001");
});

