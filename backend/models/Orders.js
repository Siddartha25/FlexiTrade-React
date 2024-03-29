const mongoose = require('mongoose');
const {Schema}=mongoose;
const OrderSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:"Pending Delivery"
    }
  });

  module.exports = mongoose.model('order', OrderSchema);