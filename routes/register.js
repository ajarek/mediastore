const router =require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.get('/register',(req,res)=>{
    res.render('register')
})

//REGISTER
router.post('/register', async (req,res)=>{
    try{
        const salt= await bcrypt.genSalt(10)
        const hashedPass=await bcrypt.hash(req.body.password, salt)
       const newUser=new User({
           username: req.body.username,
           email: req.body.email,
           password: hashedPass
       })
       const user=await newUser.save()
       console.log('Registered ok'+user)
       res.redirect('/')
    }
    catch(err){
        res.status(500).send(err)
    }
})
module.exports=router