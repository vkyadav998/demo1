let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
require("./schema")

let TEST = mongoose.model("TEST_MODEL");

router.post("/addQuestion",function (req,res) {
    let reqBody = req.body;
    let test = new TEST(reqBody);
    test.save(function (err,data) {
        if(err){
            console.error(err);
        }else {
            let resObj = {"SUCCESS":true,"data":data};
            res.json(resObj);
        }
    })
});

router.post("/getOneQues",function (req,res) {
    let checkObj = {"Q_NO":req.body.Q_NO};
    TEST.findOne(checkObj,function (err,data) {
        if(err){
            console.error(err);
        }else {
            let resObj = {"SUCCESS":true,"data":data};
            res.json(resObj);
        }
    })
})

router.get("/getAllQues",function (req,res) {
    TEST.find({},function (err,data) {
        if(err){
            console.error(err);
        }else {
            resObj = {"SUCCESS":true,"data":data};
            res.json(resObj);
        }
    })
})


module.exports = router;