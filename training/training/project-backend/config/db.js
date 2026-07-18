const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect(process.env.CONNECTION)
        console.log('db connected')
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

module.exports = connectDB