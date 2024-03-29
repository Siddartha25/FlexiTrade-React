const express = require("express");
const router = express.Router();
const Item = require("../models/Items.js");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");
const JWT_SECRET = "Harryisagoodb$oy";

var fetchuser = require("../middleware/fetchuser");

router.post("/additem", fetchuser, async (req, res) => {

    let success=false

        const item = await Item.create({
            user: req.user.id,
            name: req.body.name,
            desc: req.body.desc,
            cost: req.body.cost,
            image: req.body.image,
          }).catch((err) => {
              console.log(err); //if there is any error we catch it
              res.json({
                success,
                error: "Error occoured during insertion into collection",
                message: err.message,
              })});

    success=true
    res.json({success, message:"item has been added to inventory" });

  });

//to get all the items

router.get('/getitem',async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
