const User = require("../models/User");
const Training = require("../models/Training");

exports.getIndexPage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userId });
  res.render("index", {
    page_name: "home",
    user,
  });
};
exports.getAboutPage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userId });
  res.render("about", {
    page_name: "about",
    user,
  });
};
exports.getContactPage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userId });
  res.render("contact", {
    page_name: "contact",
    user,
  });
};
exports.getDashboardPage = async (req, res) => {
  const users = await User.find();
  const trainings = await Training.find({ user: req.session.userId });
  const user = await User.findOne({ _id: req.session.userId }).populate(
    "trainings"
  );
  res.render("dashboard", {
    page_name: "dashboard",
    trainings,
    user,
    users,
  });
};

exports.getTrainingsPage = async (req, res) => {
  const trainings = await Training.find();
  const users = await User.find({ role: "fitness-instructor" });
  const user = await User.findOne({ _id: req.session.userId });
  res.render("trainings", {
    page_name: "trainings",
    trainings,
    users,
    user,
  });
};
exports.getRegisterPage = (req, res) => {
  res.render("register");
};
exports.getLoginPage = (req, res) => {
  res.render("login");
};
exports.getCreateTrainingPage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userId });

  res.render("createTraining", {
    user,
  });
};
