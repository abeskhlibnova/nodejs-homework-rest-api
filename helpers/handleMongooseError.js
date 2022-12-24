const handleMongooseError = (error, data, next) => {
  const { name, code } = error;
  error.status = name === "MongooseServerError" && code === 11000 ? 409 : 404;
  next();
};

module.exports = handleMongooseError;
