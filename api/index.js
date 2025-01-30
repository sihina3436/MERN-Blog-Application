
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'


const app = express();
dotenv.config();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json());



// I add the error handling middleware to this place then, this middlewar dont work bro


mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.listen(5000,() =>{
    console.log(`Server is running on port 3000`);
});


app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

// but I added the middleware to this place then it works corectly (can you explain the defference )

app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
});
