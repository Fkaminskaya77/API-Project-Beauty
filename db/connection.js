import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/BeautyAPI", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))

export default mongoose