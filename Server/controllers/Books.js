// In controllers/bookController.js
import Book from "../models/BookModel.js";

export const registerBook = async (req, res, next) => {
    try {
        const { bookName, bookSummary, numberOfAuthors, remark } = req.body;
        const {docFile} = req.file;
        const authorId = req.params.id;

        const book = new Book({
            bookName,
            bookSummary,
            numberOfAuthors,
            remark,
            docFile,
            authorId
        });

        await book.save();

        return res.status(201).json({ message: 'Book registered successfully', book });
    } catch (error) {
        next(error);
    }
};
