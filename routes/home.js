const router = require('express').Router()
const User = require('../models/User')
const Mobile = require('../models/Mobile')
const mysort = {createdAt:-1}

router.get('/',async(req,res)=>{
  try {
    let mobiles
      
      mobiles = await Mobile.find({}).sort(mysort)
      res.render('home',{myhome:mobiles})
    
      }
   catch (err) {
    res.status(500).send(err)
  }
})
module.exports=router