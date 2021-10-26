const router =require('express').Router()
const Mobile = require('../models/Mobile')
const bcrypt = require('bcrypt')
const authenticate = require('../middleware/auth')

router.get('/admin',authenticate,(req,res)=>{
    let Name= req.query.data
    res.render('admin',{data:Name})
})
.post('/admin', (req, res) => {
    
    const newMobile= new Mobile(req.body)
     try {
      newMobile.save()
     res.redirect('/')
     } catch (err) {
         res.status(500).send(err)
     }
 
})
module.exports=router