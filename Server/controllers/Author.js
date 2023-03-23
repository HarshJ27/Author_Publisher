import Author from "../models/AuthorModel.js"
import Book from "../models/BookModel.js"
import mongoose from "mongoose";

export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        // Check if author already exists
        const existingAuthor = await Author.findOne({ email });
        if (existingAuthor) {
            return res.status(409).json({ error: 'Author already exists' });
        }
        // Create new author
        const author = new Author({
            firstName,
            lastName,
            email,
            password
        });
        // Save author to database
        await author.save();
        return res.status(201).json({ message: 'Author registered successfully', id: author._id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


