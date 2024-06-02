const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://user:Mern2024@mern.gxn0c4x.mongodb.net/MERN_PROJECT')
mongoose.connect('mongodb://localhost:27017/MERN_PROJECT')
const db = mongoose.connection;

db.on("connected",(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log(`DB connected`);
})