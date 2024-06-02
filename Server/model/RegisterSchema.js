const mongoose = require('mongoose')

const RegisterData = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    role : {
        type : String
    }
})

const user = mongoose.model('Register_User',RegisterData);

module.exports = user