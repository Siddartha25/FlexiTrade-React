const express = require("express");
const router = express.Router();
const Order = require("../models/Orders.js");
const Cart = require("../models/Cart.js");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");

var jwt = require("jsonwebtoken");
const JWT_SECRET = "Harryisagoodb$oy";

var fetchuser = require("../middleware/fetchuser");

const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })


router.post("/",upload.single('ItemImage'), async (req, res) => {

    console.log(req.body);
    console.log(req.file);

    res.redirect("http://localhost:5000/upload")

  });

module.exports = router;
