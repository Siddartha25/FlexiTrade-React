const mongoose = require('mongoose');
const {Schema}=mongoose;
const DeliveryRequestApprovedSchema = new Schema({
    orderid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    customerid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    driverid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }

  });

  module.exports = mongoose.model('deliveryrequestapproved', DeliveryRequestApprovedSchema);