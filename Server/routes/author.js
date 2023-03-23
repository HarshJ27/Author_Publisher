import express from "express";
const router = express.Router();
import multer from "multer";
import {register} from "../controllers/Author.js"
import {registerBook} from "../controllers/Books.js"

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });


router.post('/register', register);

router.post('/:id/book', upload.single('docFile'), registerBook);




// Define the '/api/upload' endpoint for file uploads
// router.post('/upload', upload.single('docFile'), fileUpload);


export default router;
