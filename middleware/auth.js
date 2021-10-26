const jwt = require("jsonwebtoken");
const {TOKEN_SECRET}=require('../confing')
function authenticate(req,res,next){
    
    const token = req.cookies.jwt
    if (token === null) return res.sendStatus(401)

    jwt.verify(token,TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.username = user
        next()
    })
}
module.exports=authenticate