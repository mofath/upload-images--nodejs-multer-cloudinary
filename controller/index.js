const multerConfig = require("../multer");
const UserModel = require("../models/user-model");

const uploadController = async (req, res, next) => {
  console.log("\x1b[33m%s\x1b[0m", "...UPLOAD IMAGE...");

  multerConfig(req, res, (err) => {
    if (err) return res.json({ message: "Failed", err: err.message });

    const newUser = new UserModel({
      name: "anonymos",
      avatarUrl: res.req.file.path,
    });

    newUser.save();

    return res.status(200).json({
      message: "Success",
      user: {
        name: newUser.name,
        avatarUrl: res.req.file.path,
      },
    });
  });
};

module.exports = uploadController;
