const mongoose=require('mongoose')

const MobileSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    
    photo:{
        type:String,
        required:false,
    },
    desc1:{
        type:String,
        required:false,
    },
    desc2:{
        type:String,
        required:false,
    },
    desc3:{
        type:String,
        required:false,
    },
    desc4:{
        type:String,
        required:false,
    },
    desc5:{
        type:String,
        required:false,
    },
    desc6:{
        type:String,
        required:false,
    },
    price:{
        type:String,
        required:false,
    },
    
},
{timestamps:true}
)
module.exports=mongoose.model('Mobile',MobileSchema)