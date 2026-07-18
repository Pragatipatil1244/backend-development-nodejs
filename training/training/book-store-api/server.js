require('dotenv').config()
const express = require('express')
const connectDB = require('./database/db')
const router = require('./routes/book-routes')



const app = express()
//middleware 
app.use(express.json())
//routes here
app.use('/api/books',router)

//conncting db
connectDB()

const port = process.env.port
app.listen(port,()=>{
    console.log(`server is ${port}`);
    
})