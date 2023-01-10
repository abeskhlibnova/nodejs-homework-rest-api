const { User } = require("../../models/user");
const HttpError = require("../../helpers");

const updateSubscription = async (req, res, next) => {
  const { _id, email, subscription } = req.user;

  const result = await User.findByIdAndUpdate(_id, req.body, { new: true });
  if (!result) {
    throw HttpError(400, "Missing field favorite");
  }
  res.json({
    user: {
      email,
      subscription,
    },
    message: "Your subscription status has changed",
  });
};

module.exports = updateSubscription;
