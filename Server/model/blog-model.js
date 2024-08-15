import mongoose from "mongoose";

const blogschema = new mongoose.Schema(
    {
        cat_id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        author: {
            type: String,
            required: true
        },
        blog_detail: {
            type: String,
            required: true,
        }
    }
)

const Blog_Cat = mongoose.model('Blogs', blogschema)
export default Blog_Cat;