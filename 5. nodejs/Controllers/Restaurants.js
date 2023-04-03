const Restaurants = require('../Models/Restaurants.json');  // importing the Restaurant JSON data

// getRestaurantByCity function to return restaurants by city
exports.getRestaurantsByCityName = (req, res) => {
    const cityName = req.params.cityname;
    const result = Restaurants.filter(item => item.city == cityName);
    res.status(200).json({ message: "Restaurants Fetched Sucessfully", restaurantList: result })
        .catch(err => {
            res.status(500).json({ message: err })
        }
        );
}

// getRestaurantByCity function to return restaurants by Id
// exports.getRestaurantById = (req, res, next) => {
//     const resId = req.params.resId;
//     const result = Restaurant.filter(item => item._id == resId);
//     res.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurant: result })
//         .catch(err => {
//             res.status(500).json({ message: err })
//         }
//         );
// }