const express = require("express");
const pageController = require('../controllers/pageController')
const projectController = require('../controllers/projectController')
const router = express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/portfolio').get(pageController.getPortfolio)
router.route('/portfolio').post(projectController.createProject)
router.route('/portfolio/:id').put(projectController.editProject)
router.route('/portfolio/:id').delete(projectController.deleteProject)
router.route('/about').get(pageController.getAboutPage)
router.route('/team').get(pageController.getTeam)
router.route('/contact').get(pageController.getContactPage)
router.route('/services').get(pageController.getServicesPage)

module.exports = router;