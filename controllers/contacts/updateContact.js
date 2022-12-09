const contacts = require("../../models/contacts");

const updateContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw HttpError(400, "Missing fields");
    }
    const { contactId } = req.params;

    const result = await contacts.updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404, "Not Found");
    }
    res.json({
      message: "Delete success!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
