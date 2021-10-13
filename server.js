const express =require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const {port,database}=require('./confing')
dotenv.config()
const app = express()
//databasa
mongoose.connect(database,()=>{
    console.log("Connecting to Database")
})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.json())

app.use(require('./routes/home'))
app.use(require('./routes/login'))
app.use(require('./routes/admin'))
app.use(require('./routes/register'))
app.use(require('./routes/cart'))




app.listen(port, () => {
    console.log('Backend is running:'+ port);
})