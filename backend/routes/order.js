const express = require("express");
const router = express.Router();
const Order = require("../models/Orders.js");

var fetchuser = require("../middleware/fetchuser");

router.get("/getorder", fetchuser, async (req, res) => {
    try {
      let userId = req.user.id;
      const orders = await Order.find({user:userId});
      res.send(orders);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
  
  
  module.exports = router;
  