import mongoose from "mongoose";
const Schema = mongoose.Schema;

const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
});

export default mongoose.model('Author', authorSchema);
