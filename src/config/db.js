import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI);
    console.log(
      "✅ MongoDB connected"
      // connect.Connection.host
      // connect.Connection.name
    );
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};
