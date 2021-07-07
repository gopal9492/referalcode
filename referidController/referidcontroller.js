const usermodel= require('../usermodel/usermodel')

exports.referid=(req,res)=>{
    usermodel.findById(req.params.id,function(err,users){
        if(err){
            res.send("the id is wrong");
        }
        else{
          //console.log(users.referid);
            usermodel.aggregate([
                {$match: {referredby :users.referid}},
                {$project:{firstname:1}}
            ]).exec(function (err,data){
                if(err) throw err;
                else res.send(data)
            })
            
        }
    })
    
}