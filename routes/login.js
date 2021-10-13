const router =require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

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
        getName=user.username
       res.redirect('/admin')
       
    }
    catch(err){
        console.log('err')
    }
    
})
module.exports=router