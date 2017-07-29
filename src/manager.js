let express = require("express");
let router = express.Router();

let user = require("./user");
let test = require("./test");

router.use("/user", user);
router.use("/test", test);


module.exports = router;