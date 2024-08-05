const admin = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) {
      return res
        .status(403)
        .json({ message: "Access denied. User is not an Admin" });
    }
    // res.status(200).json({ message: req.user.isAdmin });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = admin;
