import mongoose from "mongoose";

const blogCatschema = new mongoose.Schema(
    {
        cat_name: {
            type: String,
            required: true,
            unique: true
        },
        cat_des: {
            type: String,
            required: true
        }
    }
)

const Cat = mongoose.model('blog_category', blogCatschema)
export default Cat;