const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const project = await Project.create(req.body);
  project.save();
  res.redirect("portfolio");
};
exports.deleteProject = async (req, res) => {
  const deletedProject = await Project.findByIdAndDelete({
    _id: req.params.id,
  });
  await res.redirect("/portfolio");
};
exports.editProject = async (req, res) => {
  const project = await Project.findById({ _id: req.params.id });
  project.name = req.body.name;
  project.overview = req.body.overview;
  project.description = req.body.description;
  project.imageURL = req.body.imageURL;
  project.save();

  await res.redirect("/portfolio");
};
