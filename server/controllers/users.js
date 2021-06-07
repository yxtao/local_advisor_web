import User from '../models/user.js';


export const signUp = async(req, res)=>{
   const { firstName, lastName, email, password } = req.body;
   const newUser = new User({firstName: firstName, lastName: lastName, email:email, password:password});
   try{
      await newUser.save();
      res.status(201).json(newUser);
   }catch(err){
       res.status(409).json({message: err.message});
   }
}

export const signIn = async(req, res)=>{
    const { email, password } = req.body;
    
    try{
       const oldUser = await User.findOne({email : email});
     
       res.status(201).json(oldUser);
    }catch(err){
        res.status(409).json({message: err.message});
    }
 }

