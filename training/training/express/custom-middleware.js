const express = require('express')

const app = express()


const requestTimeStamp = (req,res,next)=>{
    const timeStamp = new Date().toISOString()

    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next()
}

app.use(requestTimeStamp)


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