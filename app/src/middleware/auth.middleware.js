
module.exports = function(req,res,next){
    console.log("in the AuthMidd");
    if(req.headers.token == undefined || req.headers.token != 123 ){
        console.log("auth : fail");
        res.json({msg:"Please Login before acccess the service",rcode:-9,data:""})
    }else{
        console.log("auth : success ");
        next(); // go ahead 
    }
}