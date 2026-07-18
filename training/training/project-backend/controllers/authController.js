const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = async(req,res)=>{
    try {
        const {username,password,email,role}= req.body
        const existingUser = await User.findOne({username})
        if (existingUser) return res.status(400).json({
            message:"username already exists"
        })

        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({username,password:hashedPassword,email,role})
        await newUser.save()
        res.status(201).json({
            message:'user created successfully'
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({message:"server"})
    }
}

const login = async(req,res)=>{
    try {
        const {username,password} = req.body
        const user = await User.findOne({username})
        if(!user) return res.status(400).json({
            message:'no user exist with this username'
        })
        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch) return res.status(400).json({
            message:'Invalid Password'
        })

        const token = jwt.sign(
            {id:user._id,role:user.role},
            process.env.JWT_SECRET,
            {expiresIn:"30m"}
        )
        res.status(200).json({
            token:token,
            message:'login successful',
            user:{
                id:user._id,
                role:user.role,
                username:user.username,
                email:user.email
            }
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"server"})
    }
}


module.exports= {
    signup,
    login
}