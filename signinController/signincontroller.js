const usermodel= require('../usermodel/usermodel')

exports.signin =async (req,res)=>{

    const {email,password}=req.body;
    
     await usermodel.findOne({ email:req.body.email}).then(user => {
        if (!user){
            res.send("the email id is wrong")
            return res.status(400).json(errors);
        }
        else if(password == user.password){
            res.send(user);
        }
        else{
            res.send("password is not matched")
        }
    })
}