const User = require("../models/user-modles");
const Cont = require("../models/contact-model");
const { get } = require("mongoose");
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    // if (!users || users.length === 0) {
    //   return res.status(404).json({ message: "No user found" });
    // }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
const getAllContacts = async (req, res) => {
  try {
    const users = await Cont.find();
    // if (!users || users.length === 0) {
    //   return res.status(404).json({ message: "No Contact found" });
    // }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    if (!id) {
      return res.status(404).json({ message: "Id not found" });
    }
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};
const deleteContact = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Cont.deleteOne({ _id: id });
    if (!id) {
      return res.status(404).json({ message: "Id not found" });
    }
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};
const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findById({ _id: id }, { password: 0 });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const editUser = async (req, res, next) => {
  try {
    const id=req.params.id;
    const update=req.body;
    const updateData=await User.updateOne({_id:id},{$set:update})
    res.status(200).json(updateData );
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllUsers, getAllContacts, deleteUser, getUser ,editUser,deleteContact};
