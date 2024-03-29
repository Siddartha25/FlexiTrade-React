const mongoose=require('mongoose');

const mongouri='mongodb+srv://Siddartha:JmYcfrpYIOm4YOBP@clustersid.jmxh0db.mongodb.net/flexitrade'; //this is one that we created using our mongo account if we want we can use the databse that we made locally also but for using that we need to first run the mongo server locally in our computer using the mongod command in our terminal
//as we face problem during hosting we are not using the local mongo server


 //this is an async function so either we can make it async or use promises ie callbac
async function connecttomongo() {
    await mongoose.connect(mongouri).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

module.exports=connecttomongo;