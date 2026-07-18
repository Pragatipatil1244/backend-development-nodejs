const mongoose = require('mongoose')


const connectDB = async()=>{
    try{
        await mongoose
        .connect('mongodb+srv://haribalajee:HariHari890@ecom.0arm7af.mongodb.net/bookstore?appName=Ecom');
        console.log('db connected')
    }
    catch(error){
        console.error('mongodb connection failed',error)
        process.exit(1)
    }
}

module.exports = connectDB