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
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true
  } 
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project 
