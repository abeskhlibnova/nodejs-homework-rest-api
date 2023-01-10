const express = require("express");

const ctrl = require("../../controllers/users");

const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlewares");
const { registerLoginSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validateBody(registerLoginSchema),
  ctrlWrapper(ctrl.signup)
);

router.post(
  "/login",
  validateBody(registerLoginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("", authenticate, ctrlWrapper(ctrl.updateSubscription));

module.exports = router;
