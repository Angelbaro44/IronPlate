const express = require('express');
const router = express.Router();
const AdminData =  require('../models/AdminData');


router.get('/admindata',(req,res)=>{
      AdminData.find().then(data => res.status(200)
      .json(data))
      .catch((err) => res.status(500).json({ err }));


})
router.post('/admindata', (req,res)=>{
      AdminData.findOneAndUpdate({},req.body, {new:true, upsert:true})
      .then(data => res.status(200).json(data))
      .catch((err) => res.status(500).json({ err }));
})











module.exports = router;
