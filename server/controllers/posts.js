import Post from '../models/post.js';

export const createPost = async (req, res) => {
    try {
     const post = new Post(req.body);
     await post.save();
     res.status(201).json(post);
    } catch (error) {
     res.status(400).json({ success: false, error });
    }
   }

   await post.save();

   res.status(201).json(post);

   export const getPosts = async (req, res) => {
    try {
     const posts = await Post.find();
     res.status(200).json(posts);
    } catch (error) {
     res.status(400).json({ success: false, error });
    }
   }