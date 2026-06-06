import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

import noteRoutes from './routes/note.route.js'

const app = express();
dotenv.config()
const port = process.env.PORT || 4002

//Database connection code
try {
    mongoose.connect(process.env.MONGO_URI)
    console.log("connected to MongoDB");
} catch (error) {
    console.log("error connecting to MongoDb",error);
}

//Routing Middleware
app.use(express.json())
app.use(cors())
app.use("/api/v1/noteapp",noteRoutes)


app.listen(port, () => {
  console.log(`Sever Running On ${port}`);
});