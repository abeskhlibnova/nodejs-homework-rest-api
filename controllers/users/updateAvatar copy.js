const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id } = req.user;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;

// import jimp from "jimp";

// async function main() {
//   // Read the image.
//   const image = await jimp.read("test/image.png");

//   // Resize the image to width 150 and auto height.
//   await image.resize(150, jimp.AUTO);

//   // Save and overwrite the image
//   await image.writeAsync("test/image.png");
// }

// main();
