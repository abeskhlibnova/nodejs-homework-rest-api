const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { HttpError } = require("../../helpers");

const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  console.log(tempUpload);
  console.log(req.file);
  const { _id } = req.user;
  const kart = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);

  Jimp.read(resultUpload, (err, image) => {
    if (err) {
      throw HttpError(404, "Avatar not found");
    }
    image.resize(250, 250).write(resultUpload);
  });

  const avatarURL = path.join("avatars", filename);

  await User.findByIdAndUpdate(_id, { avatarURL });
  console.log(avatarURL);
  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
