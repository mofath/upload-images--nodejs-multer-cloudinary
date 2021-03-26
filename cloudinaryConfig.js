const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

function uploadToCloudinary(file) {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(file, (err, url) => {
      if (err) return reject(err);
      return resolve(url);
    });
  });
}
module.exports = { uploadToCloudinary };
