import Blog_Cat from '../model/blog-model.js'

export const Blogs = async(req, res) => { 
    try {
        const blogs = await Blog_Cat(req.body);
        blogs.save();
        res.status(200).json({ msg: 'Blog Category Created!' }); 
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getBlogs = async(req, res) => { 
    let blogsCat;
    try {
        blogsCat = await Blog_Cat.find({});
        res.status(200).json(blogsCat); 
    } catch (error) {
        res.status(500).json(error);
    }
}