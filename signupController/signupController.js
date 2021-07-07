const usermodel= require('../usermodel/usermodel')
var randomstring = require("randomstring");

exports.signup = async (req, res) => {
    const {firstname,lastname,email,password}=req.body;
    const referid=randomstring.generate(7);
    const referredby=req.body.referredby || "" ;

    const user=await usermodel.findOne({ email: req.body.email }).then(user => {
        if (user) {
            res.send("the email is already exist")
            return res.status(400).json(errors);
        } 
    })
    

    const newuser=await new usermodel({
        firstname,lastname,email,password,referid,referredby
    })
    await newuser.save();
    res.send("data is added")
}