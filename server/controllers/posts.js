
import  mongoose  from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostMessage.findById( id );
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        
        res.status(200).json(post);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getPostByPage = async (req, res) => {
    const LIMIT = 6;
    const { page } = req.query;;
    try { 
        const startIndex = (Number(page)-1)*LIMIT;
        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find().sort({_id:-1}).limit(LIMIT).skip(startIndex);
        res.status(200).json({ posts: posts, currentPage: Number(page), numberOfPages: Math.ceil(total/LIMIT)})
    } catch (error) {
        res.status(404).json({message: error.message})
    }

}

export const createPost = async (req, res) =>{
    const  post = req.body;
    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString()});

    try {
        await newPostMessage.save();
       
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    
    const { title, message, creator, selectedFile, tags , name, likeList} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, name, likeList, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async(req, res) => { 
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostMessage.findByIdAndRemove(id);
    
    res.json({message: 'Post deleted successfully'});
}
