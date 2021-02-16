const express = require('express');
const fs = require('fs')
const restaurantsModel = require('../models/Restaurants');
const app = express();

//http://localhost:3000/restaurants
//http://localhost:3000/restaurants?sortBy=ASC
app.get('/restaurants', async (req, res) => {
  var restaurants;

  if(req.query.sortBy)
  {
    const sortFlag = req.query.sortBy == 'ASC'? 1 : -1
    restaurants = await restaurantsModel.find({})
              .sort({'restaurant_id': sortFlag})
              .select('cuisines name city restaurant_id address.street')
  }else{
    restaurants = await restaurantsModel.find({})
  }
  
  try {
    res.send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

//http://localhost:3000/restaurants/cuisine/Japanese
app.get('/restaurants/cuisine/:name', async (req, res) => {
  console.log(req.params)
  const restaurants = await restaurantsModel.find({cuisine: req.params.name});

  try {
    res.send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});

//http://localhost:3000/restaurants/Delicatessen
/*
app.get('/restaurants/:name', async (req, res) => {

  try {
      await restaurantsModel.find({})
                            .where('cuisine', req.params.name)
                            .where('city').ne('Brooklyn')
                            .sort('name')
                            .select('cuisine name city')
                            .exec((err, data) => {
                              if (err){
                                  res.send(JSON.stringify({status:false, message: "No data found"}));
                              }else{
                                  res.send(data);
                              }
                            });

  } catch (err) {
    res.status(500).send(err);
  }
});
app.get('/restaurants/:name', async (req, res) => {
  const restaurants = await resturantsModel.find({}).sort({'resturant_id': 1});
})
*/

// REST API return restaurants details where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn
app.get('/restaurants/:name', async (req, res) => {

  try {
      await restaurantsModel.find({})
                            .where('cuisine', req.params.name)
                            .where('city').ne('Brooklyn')
                            .sort({'name':1})
                            .select('cuisine name city')
                            .exec((err, data) => {
                              if (err){
                                  res.send(JSON.stringify({status:false, message: "No data found"}));
                              }else{
                                  res.send(data);
                              }
                            });

  } catch (err) {
    res.status(500).send(err);
  }
});
 
//http://localhost:3000/restaurants/database/dumps
app.get('/restaurants/database/dumps', async (req, res) => {
    try {
      fs.readFile('restaurant_data.json', (err, data) => {
        if(err){
          res.send(err)
        }else{
          console.log(JSON.parse(data))
         //restaurantsModel.create(JSON.parse(data))
        }
      })
      res.send(JSON.stringify({status: true, message: "Record Inserted successfully"}))
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = app
restaurantsModel.create(

[{
  "address": {
	"building": "1008",
	"street": "Morris Park Ave",
	"zipcode": "10462"
 },
 "city": "Bronx",
 "cuisine": "Bakery",
 "name": "Morris Park Bake Shop",
 "restaurant_id": "30075445"
},
{
  "address": {
	"street": "Thai Son Street",
	"zipcode": null
 },
 "city": "Manhattan",
 "cuisine": "Vietnamese",
 "name": "Pho Me Long Time",
 "restaurant_id": "30075455"
},
{
  "address": {
	"building": "253",
	"street": "East 167 Street",
	"zipcode": null
 },
 "city": "Bronx",
 "cuisine": "Chicken",
 "name": "Mom's Fried Chicken",
 "restaurant_id": "40382900"
},
{
  "address": {
	"building": "120",
	"street": "East 56 Street",
	"zipcode": "19800"
 },
 "city": "Mahattan",
 "cuisine": "Italian",
 "name": "Montebello Restaurant",
 "restaurant_id": "40397082"
},
{
  "address": {
	"building": "195",
	"street": "Soprano Street",
	"zipcode": "17500"
 },
 "city": "Staten Island",
 "cuisine": "Hamburgers",
 "name": "Joeys Burgers",
 "restaurant_id": "40397555"
},
{
  "address": {
	"building": "200",
	"street": "Queens Boulevard",
	"zipcode": "19700"
 },
 "city": "Queens",
 "cuisine": "American",
 "name": "Brunos on the Boulevard",
 "restaurant_id": "40397678"
},
{
  "address": {
	"building": "555",
	"street": "Sushi Street",
	"zipcode": "17700"
 },
 "city": "Brooklyn",
 "cuisine": "Japanese",
 "name": "Iron Chef House",
 "restaurant_id": "40397699"
},
{
  "address": {
	"building": "555",
	"street": "Fontana Street",
	"zipcode": null
 },
 "city": "Brooklyn",
 "cuisine": "Japanese",
 "name": "Wasabi Sushi",
 "restaurant_id": "40398000"
},
{
  "address": {
	"building": "900",
	"street": "Goodfellas Street",
	"zipcode": "17788"
 },
 "city": "Brooklyn",
 "cuisine": "Delicatessen",
 "name": "Sal's Deli",
 "restaurant_id": "40898000"
},
{
  "address": {
	"building": "909",
	"street": "44 Gangster Way",
	"zipcode": "17988"
 },
 "city": "Queens",
 "cuisine": "Delicatessen",
 "name": "Big Tony's Sandwich Buffet",
 "restaurant_id": "40898554"
},
{
  "address": {
	"building": "1201",
	"street": "121 Canolli Way",
	"zipcode": "17989"
 },
 "city": "Queens",
 "cuisine": "Delicatessen",
 "name": "The Godfather Panini Express",
 "restaurant_id": "40898554"
}]
)