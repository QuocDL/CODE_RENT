import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import router from './routes/index.js';
import cors from 'cors'
const app = express();
dotenv.config();

const {PORT, URI} = process.env;

app.use(express.json());
app.use(cors());

mongoose
.connect(URI)
.then(()=>{
    console.log("DATABASE CONNECTED!")
})
.catch(()=>{
    console.log("CONNECT DATABASE FAILED!")
})


app.use('/api', router)

app.listen(PORT, ()=>{
    console.log(`APP RUNNING ON PORT ${PORT}`)
})
