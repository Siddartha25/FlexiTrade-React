const express = require("express");
const router = express.Router();
const Order = require("../models/Orders.js");
const Delreq = require("../models/Deliveryrequests.js");
const deliveryrequestapproved = require("../models/Deliveryrequestsapproved.js");

var fetchuser = require("../middleware/fetchuser");

//to find all the orders not orderd by us
router.get('/getdelivery', fetchuser,async (req, res) => {
    let userid= req.user.id
      try {
          const available = await Order.find({$and:[{user:{$ne:userid}},{status:"Pending Delivery"}]});
          res.json(available)  
      } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
      }
  })

  //to request the admin to deliver a item
router.post("/deliveryreq", fetchuser, async (req, res) => {
    let success=false
    let userid= req.user.id
    
    const available = await Delreq.find({$and:[{driverid:userid},{orderid: req.body._id}]});
    // console.log(available)
    if(available.length==0){
        const x = await Delreq.create({
            orderid: req.body._id,
            customerid: req.body.user,
            driverid: userid,
            name: req.body.name,
            quantity: req.body.quantity,
            status: req.body.status
          }).catch((err) => {
              console.log(err); 
              res.json({
                success,
                error: "Error occoured during insertion into collection",
                message: err.message,
              })});
        success=true
        res.json({success, message:"This item has been requested to be delivered" });
    }
    else{
        success=true
        res.json({success, message:"This item has already been requested to be delivered" });
    }
});

router.get('/showdeliveryreq',async (req, res) => {
      try {
          const available = await Delreq.find();
          res.json(available)  
      } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
      }
  });

  router.get('/myapprovedelivery',fetchuser,async (req, res) => {
    try {
        const available = await deliveryrequestapproved.find({driverid: req.user.id});
        res.json(available)  
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/approvedeliveryreq',async (req, res) => {

    const available = await deliveryrequestapproved.find({orderid: req.body.orderid});

    if(available.length==0){
            success=false
            const x = await deliveryrequestapproved.create({
                    orderid: req.body.orderid,
                    customerid: req.body.customerid,
                    driverid: req.body.driverid,
                    name: req.body.name,
                    quantity: req.body.quantity,
                    status: req.body.status
            }).
                    catch((err) => {
                            console.log(err); 
                            res.json({
                                success,
                                error: "Error occoured during insertion into collection",
                                message: err.message,
                    })});

            const y = await Delreq.findOneAndDelete({$and:[{driverid:req.body.driverid},{orderid: req.body.orderid}]});
            success=true
            res.json({success, message:"This item has been approved to be delivered" });
    }
});


router.post('/confirmdelivery',fetchuser,async (req, res) => {

            success=false
            const x = await deliveryrequestapproved.findOneAndUpdate({$and:[{driverid:req.body.driverid},{orderid: req.body.orderid}]},{$set:{status:"Delivered"}}).
                    catch((err) => {
                            console.log(err); 
                            res.json({
                                success,
                                error: "Error occoured during Updating the order",
                                message: err.message,
                    })});

            const y = await Order.findOneAndUpdate({_id: req.body.orderid},{$set:{status:"Delivered"}}).
                    catch((err) => {
                            console.log(err); 
                            res.json({
                                success,
                                error: "Error occoured during Updating the order",
                                message: err.message,
                    })});

            success=true
            res.json({success, message:"This item has been delivered" });
});


  
module.exports = router;
