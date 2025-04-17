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

// MongoDB schema
const imageSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    timestamp: Date
  });
  
  const Image = mongoose.model("Image", imageSchema);
  
  // Endpoint to get the Home image
  app.get("/api/home-image", async (req, res) => {
    try {
      const image = await Image.findOne({ name: "HomeImg" });
      if (image) {
        res.json(image);
      } else {
        res.status(404).json({ message: "Image not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error fetching image", error: err });
    }
  });

  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));