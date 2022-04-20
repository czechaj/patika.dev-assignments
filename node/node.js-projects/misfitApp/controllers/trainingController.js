const User = require("../models/User");
const Training = require("../models/Training");

exports.getTrainingPage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userId });
  const training = await Training.findOne({ slug: req.params.slug }).populate(
    "user"
  );
  res.render("singleTraining", {
    training,
    user,
  });
};

exports.createTraining = async (req, res) => {
  const training = await Training.create(req.body);
  res.redirect("/dashboard");
};
exports.enrollTraining = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.session.userId });
    await user.trainings.push({ _id: req.body.training_id });
    await user.save();

    res.redirect("/dashboard");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};
exports.releaseTraining = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.session.userId });
    await user.trainings.pull({ _id: req.body.training_id });
    await user.save();

    res.redirect("/dashboard");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};

exports.deleteTraining = async (req, res) => {
  const training = await Training.findOneAndDelete({
    id: req.body.training_id,
  });
  res.redirect("/dashboard");
};
