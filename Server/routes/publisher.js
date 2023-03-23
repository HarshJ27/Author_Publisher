import express from 'express';
const router = express.Router();
import {register, getAllBooks} from "../controllers/Publisher.js";

router.post('/register', register);
router.get('/books', getAllBooks);

export default router;
