const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/UsersRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://wk4:1234@cluster0.iggou.mongodb.net/lab3?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(usersRouter);

app.listen(3000, () => { console.log('Server is running...') });