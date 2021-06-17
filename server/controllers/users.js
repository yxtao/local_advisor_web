import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const secret = "secret";

export const signUp = async(req, res)=>{
   const { firstName, lastName, email, password } = req.body;
   try{
      const oldUser = await User.findOne({email: email});
      if(oldUser) return res.status(400).json({message:'User already exist'});
      const hashedPassword = await bcrypt.hash(password, 12);
      const result = new User({firstName: firstName, lastName: lastName, email:email, password:hashedPassword});
      await result.save();
      const token = jwt.sign({ email: result.email, id: result._id}, secret , { expiresIn: "1h"});
      res.status(201).json({result, token});
   }catch(err){
       res.status(409).json({message: err.message});
   }
}

export const signIn = async(req, res)=>{
    const { email, password } = req.body;
    
    try{
       const oldUser = await User.findOne({email : email});
       if(!oldUser) return res.status(404).json({message: "User doesn't exist"});
       const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
       if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credential"});
       const token = jwt.sign({email: oldUser.email, id:oldUser._id}, secret, { expiresIn: "1h"});
      
       res.status(201).json({result:oldUser, token});
    }catch(err){
        res.status(409).json({message: err.message});
    }
 }

