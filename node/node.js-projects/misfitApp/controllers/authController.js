const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const Training = require("../models/Training");

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.flash(
      "success",
      `Your registration has been successfully completed, you can login`
    );

    res.redirect("/login");
  } catch (e) {
    const errors = validationResult(req);
    for (let i = 0; i < errors.array().length; i++) {
      req.flash("errors", `${errors.array()[i].msg}`);
    }
    res.redirect("/register");
  }
};

exports.logUserIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (diff, same) => {
        if (same) {
          req.session.userId = user.id;
          res.status(200).redirect("/dashboard");
        } else {
          req.flash("errors", "Your password is not correct");
          res.redirect("/login");
        }
      });
    } else {
      req.flash(
        "errors",
        `User doesn't exist, please enter a valid email or register`
      );
      res.status(400).redirect("/login");
    }
  });
};

exports.logUserOut = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
exports.deleteUser = async (req, res) => {
  const user = await User.findOneAndDelete({ _id: req.params.id });
  await Training.deleteMany({ user: req.params.id });
  res.redirect("/dashboard");
};
