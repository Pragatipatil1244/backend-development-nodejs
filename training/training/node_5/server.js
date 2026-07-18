const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req,'req')
    res.end('hello node js from http module')
})

const port = 3000
server.listen(port,()=>{
    console.log(`server is now listening in ${3000}`);
    
})