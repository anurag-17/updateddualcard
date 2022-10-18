module.exports= (err,req,res,next)=>{

    err.message = err.message||"internal server error"
    err.statusCode = err.statusCode||500

      console.log(err)
    if(err.code ===11000){
        err.message ="Duplicate key error"
        err.statusCode = err.statusCode||400
    }
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}
