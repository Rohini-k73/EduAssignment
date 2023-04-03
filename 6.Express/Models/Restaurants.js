const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Registering the Restaurant Schema
const RestaurantSchema = new Schema({
    _id : {
        type : String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
    City: {
        type: Number,
        required: true
    },
    city_id: {
        type: Number,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    area : {
        type : Number,
        required : true
    },
    address : {
        type: String,
        required: true
    },
    thumb: {
        type: Array,
        required: true
    },
    aggregate_rating: {
        type: Number,
        required: true
    },
    cost : {
        type: Number,
        required: true
    },
   
    contact_number: {
        type: Number,
        required: true
    },
    type: {
        mealtype : Number,
        name: String
       
    },
    Cuisine: {
        cuisine: Number,
        name : String
    }
});

// checking the model existence, if not exist then create collection in DB
module.exports =  mongoose.model('Restaurants', RestaurantSchema, 'Restaurants');