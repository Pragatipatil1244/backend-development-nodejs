const express = require('express')
const { addNewBook, getAllBooks, getSingleBookbyId, updateBook, deleteBook } = require('../controllers/book-controller')


// create express Router
const router = express.Router()

//all routes 
router.post('/add',addNewBook)
router.get('/get',getAllBooks)
router.get('/get/:id',getSingleBookbyId)
router.put('/update/:id',updateBook)
router.delete('/delete/:id',deleteBook)

module.exports = router