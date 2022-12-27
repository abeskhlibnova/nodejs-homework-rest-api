const { Contact } = require("../../models/contact");

const listContacts = async (req, res, next) => {
  const result = await Contact.find({}, "name email phone");
  res.json(result);
};

module.exports = listContacts;
