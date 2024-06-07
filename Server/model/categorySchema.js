const mongoose = require('mongoose')

const CatData = mongoose.Schema({
    category : {
        type: String,
        reuire : true 
    },
}) 

const categorydata = mongoose.model('category',CatData);

module.exports = categorydata