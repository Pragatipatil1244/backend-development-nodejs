const express = require('express')
const app = express()
//middleware 
app.use(express.json())
let books =[
    {
        id:'1',
        title:'book 1'
    },
    {
        id:'2',
        title:'book 2'
    },
    {
        id:'3',
        title:'book 3'
    }
]
app.get('/',(req,res)=>{
    res.json({
        msg:'welcome to bookstore api'
    })
})
app.get('/get',(req,res)=>{
    res.json(books)
})

app.get('/get/:id',(req,res)=>{
    const book = books.find((item)=> item.id === req.params.id)
    if(book){
        res.status(200).json(book)
    }
    else{
        res.status(404).json({
            msg:'book not found , please try wit a different book'
        })
    }
})
//adding a new book
app.post('/add',(req,res)=>{
    const newBook = {
        id: Math.floor(Math.random()*1000).toString(),
        title:`Book ${Math.floor(Math.random()*1000)}`
    }

    books.push(newBook)
    res.status(200).json({
        data : newBook,
        msg:'new book is added successfully'
    })
})

// updating a book
app.put('/update/:id',(req,res)=>{
    const findCurrentBook = books.find(
        (book)=> book.id === req.params.id
    )
    if(findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title

        res.status(200).json({
            msg:`book with id ${req.params.id} updated successfully`,
            data : findCurrentBook
        })
    }else{
        res.status(404).json({
            msg:'book not found'
        })
    }
})

app.delete('/delete/:id',(req,res)=>{
    const findIndexOfBook = books.findIndex(
        (item)=> item.id === req.params.id
    )
    if(findIndexOfBook ){
        const deletedBook = books.splice(findIndexOfBook,1)
        res.status(200).json({
            msg:'book deleted successfully',
            data : deletedBook[0]
        })
    }
    else{
        res.status(404).json({
            msg:"book not found"
        })
    }
})

const port = 3000
 app.listen(port,()=>{
    console.log('port',port);
 })