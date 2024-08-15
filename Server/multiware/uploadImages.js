import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const router = express.Router();

router.use(express.static('public'));

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const imageUpload = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function (req, file, cb) {
        const allowedExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg'];
        const fileExtension = path.extname(file.originalname).toLowerCase();

        if (allowedExtensions.includes(fileExtension)) {
            const imageName = Date.now() + '-blog_image' + '-' + file.originalname;
            cb(null, imageName);
        } else {
            cb(new Error('Invalid file type'), null);
        }
    },
});

const upload = multer({ storage: imageUpload });
export default upload;