const mongoose = require('mongoose')

const CatData = mongoose.Schema({
    category : {
        type: String,
        reuire : true 
    },
    cat_icon : {
        type : String,
        require : true
    }
}) 

const categorydata = mongoose.model('category',CatData);

module.exports = categorydata