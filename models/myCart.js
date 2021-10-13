const mongoose=require('mongoose')

const myCartSchema=new mongoose.Schema({
    title:{
        type:String,
       
        
    },
    
    photo:{
        type:String,
       
    },
    
    price:{
        type:String,
       
    },
    
},
{timestamps:true}
)
module.exports=mongoose.model('cart',myCartSchema)