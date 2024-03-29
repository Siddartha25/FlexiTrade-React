const connecttomongo=require('./db');
const express=require('express');
//to allow to send requests from browser
var cors = require('cors') 

connecttomongo();
const app=express();
const port=3000;

app.use(cors());
app.use(express.json()); //to access the req.body

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send('Hello sid');
});

app.use('/api/auth', require('./routes/auth'))
app.use('/api/cart', require('./routes/cart'))
app.use('/api/item', require('./routes/items'))
app.use('/api/order', require('./routes/order'))
app.use('/api/delivery', require('./routes/delivery'))
app.use('/api/upload', require('./routes/upload'))

app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})