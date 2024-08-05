const express = require("express");
const router = express.Router();
const contSchema = require("../validator/cont-validator");
const validate = require("../middleware/validate-middleware");
const controller = require("../controller/cont-controller");

router.route("/contact").post(validate(contSchema),controller.contact );
module.exports=router;