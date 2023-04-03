const express = require('express');
const RestaurantsController = require ('../Controllers/Restaurants');
const router = express.Router();
router.post('/filterRestaurants', RestaurantsController.filterRestaurants);

module.exports = router;

