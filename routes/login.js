const router =require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const {TOKEN_SECRET}=require('../confing')
//LOGIN
router.get('/login',(req,res)=>{
    res.render('login')
})
.post('/login',async(req,res)=>{
    try{
       const user = await User.findOne({username:req.body.username})
       !user && res.status(400).send('Status 400: Wrong credentials!')

       const validated = await bcrypt.compare(req.body.password, user.password)
       !validated && res.status(400).send('Status 400: Wrong credentials!!!')
       const {password, ...others}=user._doc
       console.log(`Logged in ${user.username}!`)//${Object.values(others)}
       const accessToken=jwt.sign({_id:this._id},TOKEN_SECRET,{expiresIn:20})
      
       res.cookie('jwt', accessToken, {
           maxAge: 86400000,
           httpOnly: true,
       })
       
       res.redirect('/admin?data='+user.username)
    }  
    
    catch(err){
        console.log('err')
    }
    
})
.get('/logout',async(req,res)=>{
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/')

})   

module.exports=router