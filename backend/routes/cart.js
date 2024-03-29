const express = require("express");
const router = express.Router();
const Order = require("../models/Orders.js");
const Cart = require("../models/Cart.js");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");
const JWT_SECRET = "Harryisagoodb$oy";

var fetchuser = require("../middleware/fetchuser");


//to buy the entire cart ie we order all the items in the cart
router.post("/buycart", fetchuser, async (req, res) => {

    let success=false

    for(let i=0;i<req.body.items.length;i++){
        const orderitem = await Order.create({
            user: req.user.id,
            name:req.body.items[i].name,
            cost:req.body.items[i].cost,
            image:req.body.items[i].image,
            quantity:req.body.items[i].quantity
          }).catch((err) => {
              console.log(err); //if there is any error we catch it
              res.json({
                success,
                error: "Error occoured during insertion into collection",
                message: err.message,
              })});

        success=true
    }

    res.json({success, message:"all items have been succesfully ordered" });

  });

  //this is to create an empty cart for a user we use this when user signsup or he buys everything in his cart
  router.post("/", fetchuser, async (req, res) => {

    let success=false
    let userid= req.user.id
    //if there already exists a cart delete it and create a new one 
    //we are deleting here only so tht we dont need to delete seperatly while creating a new cart
    let x=await Cart.findOneAndDelete({user:userid});

        const Cartitem = await Cart.create({
            user: req.user.id,
            items:new Array()
          }).catch((err) => {
              console.log(err); //if there is any error we catch it
              res.json({
                success,
                error: "Error occoured during insertion into collection",
                message: err.message,
              })});

    // console.log(Cartitem.items);

    success=true
    res.json({success, message:"empty cart has been created" });

  });
  

  //this is used to add a particular item into the cart of the user
  router.post("/addtocart", fetchuser, async (req, res) => {

    let success=false
    let userid= req.user.id
    
    //we find the cart of that user and get the items and append the new item and then update the collection
    const usercart = await Cart.find({user:userid}); //it gives array of object

    let cartitems=usercart[0].items; //because we get only one size array as userid is unique and we make only 1 emptycart
    // console.log(usercart);
    // console.log(cartitems);
    cartitems.push(req.body);

    let x=await Cart.findOneAndUpdate({user:userid},{$set:{items:cartitems}});

    success=true
    res.json({success, message:"item has been added to cart succesfully" });

  });


  //this is used to update the entire cart incase quantity is changed or an element is removed
  router.put("/updatecart", fetchuser, async (req, res) => {

    let success=false
    let userid= req.user.id

    let cartitems=req.body.items;

    let x=await Cart.findOneAndUpdate({user:userid},{$set:{items:cartitems}});

    success=true
    res.json({success, message:"cart has been updated succesfully" });

  });


//this is to het the cart of the particular user
router.get('/getcart', fetchuser,async (req, res) => {
  let userid= req.user.id
    try {
        const usercart = await Cart.find({user:userid});
        res.json(usercart)  //beacuse find gives an array of objects
        // console.log(usercart)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router;
