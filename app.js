let express = require("express");
let app = new express();
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let src = require("./src/manager");

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/TEST");

//app.use(express.static("views"))

app.use("/",src);

app.listen("3001",function () {
   console.log("app started on port 3001"); 
})