const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://haribalajee:HariHari890@ecom.0arm7af.mongodb.net/training?appName=Ecom')
.then(()=>console.log('database connected'))
.catch((e)=>console.log(e))

// userschema creation 
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
    createdAt :{type:Date,default:Date.now}

})
// create a user model
const User = mongoose.model('User',userSchema)

async function runQueryExamples(){
    try{
        // const newUser = await User.create({
        //     name :'kane',
        //     email:'kane@gmail.com',
        //     age:'33',
        //     isActive:false,
        //     tags:[,'coding','footballer']
        // })
        // console.log('created new user ',newUser)
        // await newUser.save()

        // const allUsers = await User.find({})
        // console.log(allUsers)

    //     const getUserInActive = await User.find({isActive:false})
    //     console.log(getUserInActive)

    // const getUserName = await User.findOne({name:'messi'})
    // console.log(getUserName)

    // const getLastCreateduserById = await User.findById(newUser._id)
    // console.log(getLastCreateduserById)

    // const limitedUsers = await User.find().limit(2).skip(2)
    // console.log(limitedUsers)

    const sortedUsers = await User.find().sort({age:1})
    console.log(sortedUsers)
    const countDoc = await User.countDocuments({isActive:true})
    console.log(countDoc)

    
    }
    catch(e){
        console.log('error ->',e)
    }
    // finally {
    //     await MongooseError.connection.close()
    // }
    
}

runQueryExamples()