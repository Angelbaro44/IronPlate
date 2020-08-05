const express = require('express');
const router = express.Router();
const Quotes =  require('../models/Quotes');


router.get('/quotes',(req,res)=>{
      Quotes.find().then(data => res.status(200)
      .json(data))
      .catch((err) => res.status(500).json({ err }));


})
router.post('/quotes', isAuth,(req,res)=>{
      if(req.user.role==='admin'){
      Quotes.create(req.body)
      Quotes.deleteOne(req.body)
      .then(data => res.status(200).json(data))
      .catch((err) => res.status(500).json({ err }));
      }
      else{
            res.status(69).json({'No NO Spot Touched':req.user});
      }
})
router.post('/quotes/delete', isAuth,(req,res)=>{
      if(req.user.role==='admin'){
      Quotes.deleteOne({_id:req.body._id})
      .then(data => res.status(200).json(data))
      .catch((err) => res.status(500).json({ err }));
      }
      else{
            res.status(69).json({'No No Spot Touched':req.user});
      }
})

function isAuth(req, res, next) {
      req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
    }

module.exports = router;
