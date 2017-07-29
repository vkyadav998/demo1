let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
require("./schema")

let USER = mongoose.model("USER_MODEL");

// add User
router.post("/addUser",function(req,res){
    let reqBody = req.body;
    let user = new USER(reqBody);
    user.save(function (err,data) {
        
        if (err){
           return console.error(err);   
        }else{
            let  resObj={"SUCCESS":true,"data":data};
            res.json({resObj});
        }
    })
});

//get one user
router.post("/getOneUser",function (req,res) {
    let reqBody = req.body;
    let checkObj = {"USER_EMAIL":reqBody.USER_EMAIL,"USER_PASS":reqBody.USER_PASS}
    USER.findOne(checkObj,function (err,docs) {
        if(err){
            console.error(err);
        }else{
            let  resObj={"SUCCESS":true,"data":docs};
            res.json({resObj});
        }
    });
});

//get all user
router.get("/getAllUser",function (req,res) {
    USER.find({},function (err,docs) {
        if(err){
            console.error(err);
        }else{
            let  resObj={"SUCCESS":true,"data":docs};
            res.json({resObj});
        }
    });
});

module.exports = router;