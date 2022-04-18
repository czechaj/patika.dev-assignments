const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
});


const Categories = mongoose.model('Categories', CategoriesSchema);

module.exports = Categories 