const express = require('express');
const mongoose = require('mongoose');
const restaurantsRouter = require('./routes/RestaurantsRoutes');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://wk4:1234@cluster0.iggou.mongodb.net/lab3?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if(err){
    console.log(err)
  }else{
    console.log("Database connected successfully...")
  }
});

app.use(restaurantsRouter);

app.listen(3000, () => { console.log('Server is running... http://localhost:3000/') });