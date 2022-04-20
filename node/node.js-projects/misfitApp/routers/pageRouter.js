const express = require("express");
const pageController = require("../controllers/pageController");
const authMiddleware = require("../middlewares/authMiddleware");
const redirectMiddleware = require("../middlewares/redirectMiddleware");

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/contact").get(pageController.getContactPage);
router.route("/dashboard").get(authMiddleware, pageController.getDashboardPage);
router.route("/trainings").get(pageController.getTrainingsPage);
router
  .route("/register")
  .get(redirectMiddleware, pageController.getRegisterPage);
router.route("/login").get(redirectMiddleware, pageController.getLoginPage);
router
  .route("/dashboard/createTraining")
  .get(pageController.getCreateTrainingPage);

module.exports = router;
