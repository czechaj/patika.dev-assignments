const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },

  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Categories",
  //   required: true,
  // },
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project 
