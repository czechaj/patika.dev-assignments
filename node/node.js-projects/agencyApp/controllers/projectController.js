const Project = require('../models/Project')


exports.createProject = async (req, res) => {
    const project = await Project.create(req.body);
    res.status(201).redirect('/portfolio')
  };

  exports.editProject= async(req,res) => {
    const project = await Project.findOne({_id : req.params.id});
    project.name = req.body.name;
    project.overview = req.body.overview;
    project.imageURL = req.body.imageURL;
    project.description = req.body.description;
    project.save();

    await res.status(200).redirect('/portfolio')
  }
  exports.deleteProject= async(req,res) => {
    const project = await Project.findOneAndDelete({_id : req.params.id});

    await res.status(200).redirect('/portfolio')
  }