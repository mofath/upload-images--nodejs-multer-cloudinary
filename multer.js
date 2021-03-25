const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "images"),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (ext !== ".jpg" || ext !== ".png") cb(null, true);
  cb(null, false);
};

const limits = { fileSize: 1024 * 1024 * 5 };

module.exports = multer({ storage, limits, fileFilter }).single("file");
