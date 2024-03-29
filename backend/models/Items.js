const mongoose = require('mongoose');
const {Schema}=mongoose;
const ItemSchema = new Schema({
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

  module.exports = mongoose.model('item', ItemSchema);
//   module.exports=mongoose.Schema(ItemSchema);

//we exported this inorder to make the schema 