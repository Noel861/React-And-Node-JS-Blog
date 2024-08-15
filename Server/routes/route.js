import express from "express";
import { CountryData,postIdData } from "../dummyApi.js";
import { SignUp, GetUsers, Login } from "../controller/user-controller.js";
import { BlogCat, getBlogCat } from "../controller/blog-cat-controller.js";
import { Blogs, getBlogs } from "../controller/blog-controller.js";
import upload from "../multiware/uploadImages.js";

const router = express.Router();

router.post('/signup', upload.single('user_photo'), SignUp)
router.get('/getUsers', GetUsers )
router.post('/login', Login)
router.get('/')

router.post('/addCategory', BlogCat)
router.get('/getBlog', getBlogCat)
  
 router.post('/create_blog', Blogs)
 router.get('/get_blog', getBlogs)

router.get('/Country', (req, res) => {
    res.send(CountryData)
})

{/* router.get("/:UserId", (req, res) => {
    res.send(`Get User With ID ${req.params.UserId}`)
}) */}

export default router;