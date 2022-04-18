const Project = require("../models/Project");


exports.getIndexPage = (req, res) => {
  res.render("index");
};
exports.getContactPage = (req, res) => {
  res.render("contact");
};
exports.getAboutPage = (req, res) => {
  res.render("about");
};
exports.getPortfolio = async (req, res) => {
  const projects = await Project.find().sort({_id: -1})
  res.render("portfolio", {
    projects
  });
};
