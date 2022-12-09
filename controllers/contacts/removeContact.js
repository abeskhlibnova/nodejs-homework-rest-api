const contacts = require("../../models/contacts");

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    console.log(result);
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

module.exports = removeContact;
