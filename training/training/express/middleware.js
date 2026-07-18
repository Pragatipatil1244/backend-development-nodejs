const express = require('express')

const app = express()


// middleware function
const firstMiddleWare = (req,res,next)=>{
    console.log('this is first middleware will run on every second')
    next()
}

app.use(firstMiddleWare)

app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/about',(req,res)=>{
    res.send('about page')
})

 const port = 3000
 app.listen(port,()=>{
    console.log('port',port);
 })