const { Contact } = require("../../models/contact");
const HttpError = require("../../helpers");

const updateFavorite = async (req, res, next) => {
  const { id } = req.params;

  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(400, "Missing field favorite");
  }
  res.json(result);
};

module.exports = updateFavorite;
