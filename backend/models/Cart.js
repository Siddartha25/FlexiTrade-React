const mongoose = require('mongoose');
const {Schema}=mongoose;
// const ItemSchema =require("./Items.js");

const subSchema = new mongoose.Schema({
    itemid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
    },
    name:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    quantity:{
        type:Number,
        default:1
    }  
  });

const CartSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    items:[
        subSchema
    ],
  });

  module.exports = mongoose.model('cart', CartSchema);