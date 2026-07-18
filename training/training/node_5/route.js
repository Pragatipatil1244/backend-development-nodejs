const http = require('http')

const server = http.createServer((req,res)=>{
    const url = req.url
    if(url ==='/'){
        res.end('home page')
    }

    else if (url ==='/projects'){
        res.end('porjects')
    }
    else{
        res.end('this page can not be found')
    }
})

const port = 3000
server.listen(port,()=>{
    console.log(`server running in ${port}`);
})