import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { loggings } from "./utils/loggings";
import UserRoutes from "./routes/routes.js";
import { connectDB } from "./db/db.js";

dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;
connectDB();


app.use(express.json());


app.get("/", (req, res) => {
  res.send("sent");
});
app.use("/api/users", UserRoutes);

app.listen(Port, loggings(Port));
