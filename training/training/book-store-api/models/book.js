const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title :{
        type:String,
        required:[true,'book title is required'],
        trim :true,
    
    },
    author:{
        type:String,
        required:[true,'Author name is required'],
        trim: true
    },
    year:{
        type :Number,
        required:[true,"publishing year is required"],
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model('Book',BookSchema)