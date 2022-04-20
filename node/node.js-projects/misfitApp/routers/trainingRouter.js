const express = require("express");
const trainingController = require("../controllers/trainingController");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router
  .route("/newTraining")
  .post(
    roleMiddleware(["fitness-instructor", "admin"]),
    trainingController.createTraining
  );
router.route("/enrollTraining").post(trainingController.enrollTraining);
router.route("/releaseTraining").post(trainingController.releaseTraining);
router.route("/deleteTraining").post(trainingController.deleteTraining);
router.route("/:slug").get(trainingController.getTrainingPage);

module.exports = router;
