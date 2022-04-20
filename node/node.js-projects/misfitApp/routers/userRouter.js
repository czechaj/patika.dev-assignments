const express = require("express");
const { body } = require("express-validator");

const authController = require("../controllers/authController");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router.route("/register").post(
  [
    body("name").not().isEmpty().withMessage("Please enter your name"),
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom((userEmail) => {
        return User.findOne({ email: userEmail }).then((user) => {
          if (user) {
            return Promise.reject("Email already exists");
          }
        });
      }),
    body("password").not().isEmpty().withMessage("Please enter your password"),
  ],
  authController.createUser
);

router.route("/login").post(authController.logUserIn);
router.route("/logout").get(authController.logUserOut);
router.route("/:id").delete(roleMiddleware("admin"), authController.deleteUser);

module.exports = router;
