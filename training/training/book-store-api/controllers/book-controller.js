const Book = require("../models/book")


const addNewBook = async(req,res)=>{
    try {
        console.log(req.body)
        const newBook = req.body
        const newlyCreatedBook = await Book.create(newBook)
        if(newBook){
            res.status(201).json({
                succes:true,
                msg:'book created successfully',
                data: newBook
            })
        }
        // await newBook.save()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            msg:'something went wrong! please try again'
        })
    }
}

const getAllBooks = async (req,res)=>{
    try{
        const allBooks = await Book.find({})
        if(allBooks?.length>0){
            res.status(200).json({
                success:true,
                msg:'list of books fetched successfully ',
                data:allBooks
            })
        }
        else{
            res.status(404).json({
                success:false,
                msg:'no books found in collections'
            })
        }
    }catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            msg:'something went wrong! please try again'
        })
    }
}

const getSingleBookbyId = async(req,res)=>{
    try {
        const getCurrentBookId = req.params.id 
        const bookDetailById = await Book.findById(getCurrentBookId)

        if(!bookDetailById){
            return res.status(404).json({
                success:false,
                msg:"book with current id not found"
            })   
        }
        res.status(200).json({
            success:true,
            data:bookDetailById
        })
    } catch (error) {
         console.log(error)
        res.status(500).json({
            success:false,
            msg:'something went wrong! please try again'
        })
    }
}

const updateBook = async(req,res)=>{
    try {
        const updatedBookFromData = req.body
        const getCurrentBookId = req.params.id
        const updatedBook = await Book.findByIdAndUpdate(
            getCurrentBookId,
            updatedBookFromData,
            {
                new:true
            }
        )
        if(!updatedBook){
            res.status(404).json({
                succes:false,
                msg:'book not found'
            })
        }
        res.status(200).json({
            success:true,
            msg:'book updated successfully',
            data:updatedBook
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            msg:'something went wrong! please try again'
        })
    }
}
const deleteBook = async(req,res)=>{
    try{
        const getCurrentId = req.params.id
        const deleteBook = await Book.findByIdAndDelete(getCurrentId)

        if(!deleteBook){
            res.status(404).json({
                succes:false,
                msg:'book not found'
            })
        }
        res.status(200).json({
            success:true,
            data:deleteBook
        })
    }
     catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            msg:'something went wrong! please try again'
        })
    }
}
module.exports ={
    addNewBook,
    getAllBooks,
    getSingleBookbyId,
    updateBook,
    deleteBook
}