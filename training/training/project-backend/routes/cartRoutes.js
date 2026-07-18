const express = require('express')
const { addCart, getCart, removeCart } = require('../controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()


router.post('/addcart',authMiddleware,addCart)
router.get('/',authMiddleware,getCart)
router.delete('/removecart',authMiddleware,removeCart)

module.exports = router