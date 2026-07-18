require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
//app
const app = express()

//connecting db
connectDB()
//middleware
app.use(express.json())
//get the server


//router
app.use('/api',require('./routes/authRoutes'))
app.use('/api/product',require('./routes/productRoutes'))
app.use('/api/midle',require('./routes/testRoutes'))
app.use('/api/cart',require('./routes/cartRoutes'))

//get server
app.get('/',(req,res)=>{
    res.send('welcome')
})
//port
const port = process.env.PORT 
//server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})