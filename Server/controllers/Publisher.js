import Publisher from "../models/PublisherModel.js"
import Book from "../models/BookModel.js"
import mongoose from "mongoose";

export const register = async (req, res) => {
    try {
        const { firstName, lastName, organizationName, email, password } = req.body;
        // Check if author already exists
        const existingPublisher = await Publisher.findOne({ email });
        if (existingPublisher) {
            return res.status(409).json({ error: 'Publisher already exists' });
        }
        // Create new author
        const publisher = new Publisher({
            firstName,
            lastName,
            organizationName,
            email,
            password
        });
        // Save author to database
        await publisher.save();
        return res.status(201).json({ message: 'Publisher registered successfully', id: publisher._id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


export const getAllBooks = async (req, res) => {
    try {
        
        const books = await Book.find().populate('authorId', 'firstName lastName');;

        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}





