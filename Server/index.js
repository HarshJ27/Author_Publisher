import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authorRoutes from "./routes/author.js";
import publisherRoutes from "./routes/publisher.js"

const app = express();

dotenv.config()

// Middleware
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            console.log(err);
        });
};


app.use("/api/authors", authorRoutes);
app.use("/api/publishers", publisherRoutes)

app.listen(5000, () => {
    connect();
    console.log("Connected to Server");
});