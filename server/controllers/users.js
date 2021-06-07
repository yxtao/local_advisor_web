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
       const user = await User.find({email : email});
       var hasit= false;
       if (user[0].password === password){
           hasit = true;
       }
       
       res.status(201).json({user:user, has:hasit});
    }catch(err){
        res.status(409).json({message: err.message});
    }
 }

