

const adminMiddleware = (req,res,next)=>{
    if(req.user.role!== 'admin'){
        return res.status(403).json({
            msg:'forbidden'
        })
    }
    next()
}

module.exports = adminMiddleware