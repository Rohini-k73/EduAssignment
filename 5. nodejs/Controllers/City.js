const City = require('../Models/City.json');  // importing the City JSON data

// getCityList function to get all the cities
exports.getCityList = (req, res) => {
    const result = City.map(item.name);
    res.status(200).json({ message: "City Fetched Sucessfully", city: result })
}