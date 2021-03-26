const fs = require("fs")
const multerConfig = require("../multer");
const UserModel = require("../models/user-model");
const { uploadToCloudinary } = require("../cloudinaryConfig");

const uploadController = async (req, res, next) => {
  console.log("\x1b[33m%s\x1b[0m", "...UPLOAD IMAGE...");

  multerConfig(req, res, async (err) => {
    if (err) return res.json({ message: "Failed", err: err.message });
    try {
      const result = await uploadToCloudinary(res.req.file.path);

      const newUser = new UserModel({
        name: "anonymos",
        avatarUrl: result.url,
      });

      await newUser.save();

      fs.unlinkSync(res.req.file.path)

      return res.status(200).json({
        message: "Success",
        user: {
          name: newUser.name,
          avatarUrl: newUser.avatarUrl,
        },
      });
    } catch (error) {
      return res.status(500).json({ message: "failed", error: error.message });
    }
  });
};

module.exports = uploadController;
