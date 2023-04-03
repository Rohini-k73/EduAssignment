const express = require('express');

// importing all the controllers components 
var cityController = require('../Controllers/City');
// var mealTypeController = require('../Controllers/MealType');
var restaurantsController = require('../Controllers/Restaurants');

// Initializing the express router 
const router = express.Router();

// registering of all the routes
router.get('/getCityList', cityController.getCityList);
router.get('/getRestaurantsByCityName/:cityname', restaurantsController.getRestaurantsByCityName);
// router.get('/getMealType', mealTypeController.getMealType);
// router.get('/getResById/:resId', restaurantsController.getRestaurantById);

module.exports = router; // export the routers