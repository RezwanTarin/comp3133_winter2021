const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter first name'],
        trim: true,
        lowercase: true
      },
    username: {
        type: String,
        required: [true, 'Please enter first name'],
        minlength:4,
        trim: true,
        lowercase: true
      },
      email: {
        type: String,
        required: true,
        //index: true, //Optional if unique is defined
        unique: [true, "Duplicate Email Not allowed"],
        trim: true,
        uppercase: true,
        validate: function(value) {
          var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailRegex.test(value);
        }
      },
      city:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
      url: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        validate: function(value) {
          var urlRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return urlRegex.test(value);
        }
      },
      zipcode: {
        type: String,
        required: [true, 'User zipcode is require'],
        validate: function(value){
            var zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
            return zipRegex.test(value);
        },
        message: props => `${props.value} is not valid Zip Code`
      },
      phone: {
          type: String,
          required: [true, 'User Phone number is require'],
          validate: function(value){
              return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: props => `${props.value} is not valid Phone Number`
      },
      created: { 
        type: Date,
        default: Date.now
      },
      


})

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;