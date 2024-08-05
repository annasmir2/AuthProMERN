const Contact = require("../models/contact-model");

//Contact
const contact = async (req, res) => {
    try {
      const response = req.body;
      await Contact.create(response);
      res.status(200).json({ user:  response  });
    } catch (error) {
      next(error);
    }
  };
  module.exports={contact};