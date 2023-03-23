// import mongoose from "mongoose";

// const bookSchema = new mongoose.Schema({
//         name: {
//             type: String,
//             required: true
//         },
//         document: {
//             type: String,
//             required: true
//         },
//         summary: {
//             type: String
//         },
//         numberOfAuthors: {
//             type: Number,
//             required: true
//         },
//         remark: {
//             type: String
//         },
//         status: {
//             type: String,
//             enum: ['initialized', 'review', 'proofing', 'readyToPublish', 'published'],
//             default: 'initialized'
//         }
// });

// export default mongoose.model('Book', bookSchema);

// In models/Book.js

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: { type: String, required: true },
    bookSummary: { type: String, required: true },
    numberOfAuthors: { type: Number, required: true },
    remark: { type: String },
    authorId: { type: Schema.Types.ObjectId, ref: 'Author', required: true }
});

export default mongoose.model('Book', bookSchema);

