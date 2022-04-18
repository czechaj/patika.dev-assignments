const Project = require('../models/Project')



exports.getIndexPage = (req, res) => {
  res.status(200).render("index");
};
exports.getPortfolio = async (req, res) => {
  const projects = await Project.find()

  res.status(200).render("portfolio", {
    projects
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about");
};

exports.getTeam = (req, res) => {
  res.status(200).render("team");
};

exports.getContactPage = (req, res) => {
  res.status(200).render("contact");
};
exports.getServicesPage = (req, res) => {
  res.status(200).render("services");
};
