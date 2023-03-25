const express = require("express");
const router =express.Router();
const User =require("../models/User");
const bcrypt = require("bcryptjs");
const ValidateRegisterInput = require("../validation/registerValidation");

router.get("/test", (req, res)=>{
    res.send("Auth route working");
});

router.post("/register", async (req, res) =>{
    try{
        const { password } = req.body
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" })
  };
  const {errors, isValid} = ValidateRegisterInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        //check for existing user
        const existingEmail =await User.findOne({
            email: new RegExp("^" + req.body.email + "$", "i")
        });
        if(existingEmail){
            return res.status(400)
            .json({erro: "There is already a user with same email"});
        };
        
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPassword,
            email: req.body.email
        });

        const savedUser = await newUser.save();
        return res.json(savedUser);

    }catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
})


module.exports = router;