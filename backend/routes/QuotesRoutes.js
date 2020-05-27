const express = require('express');
const router = express.Router();
const Quotes =  require('../models/Quotes');


router.get('/quotes',(req,res)=>{
      Quotes.find().then(data => res.status(200)
      .json(data[2].name))
      .catch((err) => res.status(500).json({ err }));


})
router.post('/quotes', (req,res)=>{
      Quotes.create({},req.body, {new:true})
      .then(data => res.status(200).json(data))
      .catch((err) => res.status(500).json({ err }));
})











module.exports = router;
