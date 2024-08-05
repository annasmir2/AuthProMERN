const express = require("express");
const router = express.Router();
const controller=require("../controller/service-controller")
router.route("/service").get(controller);

module.exports=router;