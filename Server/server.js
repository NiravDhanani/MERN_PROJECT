const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const port  = parseInt(process.env.PORT, 10)  || 8000
const cors = require('cors')
const app = express();
const db = require('./config/db')


app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())


app.use('/v1/Api',require('./routes/route'))
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    return false
    }
    console.log(`server Start on Port ${port}`);
})
