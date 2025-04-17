import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("Connecting to DB:", process.env.DB_URL);
await mongoose.connect(process.env.DB_URL);

const PORT = process.env.PORT ?? 3000;  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));