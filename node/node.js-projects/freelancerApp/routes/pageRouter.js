const express = require("express");
const pageController = require('../controllers/pageController')
const projectController = require('../controllers/projectController')
const router = express.Router()


router.route('/').get(pageController.getIndexPage)
router.route('/contact').get(pageController.getContactPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/portfolio').get(pageController.getPortfolio)
router.route('/portfolio').post(projectController.createProject)
router.route('/portfolio/:id').delete(projectController.deleteProject)
router.route('/portfolio/:id').put(projectController.editProject)


module.exports= router