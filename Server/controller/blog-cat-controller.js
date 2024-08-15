import Cat from "../model/blog-category.js";

export const BlogCat = async(req, res) => { 
    try {
        const blogCat = await new Cat(req.body);
        blogCat.save();
        res.status(200).json({ msg: 'Blog Category Created!' }); 
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getBlogCat = async(req, res) => { 
    let blogsCat;
    try {
        blogsCat = await Cat.find({});
        res.status(200).json(blogsCat); 
    } catch (error) {
        res.status(500).json(error);
    }
}