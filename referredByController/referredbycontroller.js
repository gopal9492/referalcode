const usermodel= require('../usermodel/usermodel')

exports.referredBy=(req,res)=>{
    usermodel.findById(req.params.id,function(err,users){
        if(err){
            res.send("the id is wrong");
        }
        else{
            res.send("The refer person refer id is "+users.referredby);
        }
    })
}