let mongoose = require("mongoose");
let schema = mongoose.Schema;

let userSchema = new schema({
    "USER_ROLL":Number,
    "USER_EMAIL":String,
    "USER_PASS":String
},{collection:"users"});

mongoose.model("USER_MODEL",userSchema);

let testSchema = new schema({
    "Q_NO":Number,
    "QUESTION":String,
    "OPT_1":String,
    "OPT_2":String,
    "OPT_3":String,
    "OPT_4":String,
    "ANS":String
},{collection:"testPaper"})

mongoose.model("TEST_MODEL",testSchema);