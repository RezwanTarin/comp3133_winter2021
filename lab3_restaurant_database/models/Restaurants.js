const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  building: {
    type: Number
  },
  street: {
    type: String
  },
  zipcode: {
    type: String
  }
});

const RestaurantsSchema = new mongoose.Schema({
  restaurant_id: {
    type: String,
    trim:true

  },
  name: {
    type: String,
    require:true,
    trim:true
  },
  city:{
    type: String,
    require:true,
    trim:true
  },
  cuisine: {
    type: String,
    require:true,
    trim:true
  },
  address: { //Object
      building: {
        type: String
    },
    street: {
        type: String
    },
    zipcode: {
        type: String
    }
  },
  created: { 
    type: Date,
    default: Date.now
  },
});

const Restaurants = mongoose.model("Restaurants", RestaurantsSchema);
module.exports = Restaurants;