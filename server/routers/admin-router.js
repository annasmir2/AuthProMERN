const express=require("express");
const router=express.Router();
const controller=require("../controller/admin-controller");
const authMiddleWare=require("../middleware/auth-middleware");
const adminware=require("../middleware/admin-middleware");
router.route("/users").get(authMiddleWare,adminware,controller.getAllUsers);
router.route("/users/:id").get(authMiddleWare,adminware,controller.getUser);
router.route("/users/update/:id").patch(authMiddleWare,adminware,controller.editUser);
router.route("/users/delete/:id").delete(authMiddleWare,adminware,controller.deleteUser);

router.route("/contacts").get(authMiddleWare,adminware,controller.getAllContacts);
router.route("/contacts/delete/:id").delete(authMiddleWare,adminware,controller.deleteContact);

module.exports=router;