const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://user:iJluqlQRJW3TEfS3@cluster0.eyzbmjb.mongodb.net/MERN_PROJECT')
// mongoose.connect('mongodb://localhost:27017/MERN_PROJECT')
const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log(`DB connected`);
})