const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')

const router = express.Router()


router.get('/auth',authMiddleware,(req,res)=>{
    res.send('this page only for authorized person')
}
)

router.get('/admin',authMiddleware,adminMiddleware,(req,res)=>{
    res.send("this page is only for admin")
})

module.exports = router