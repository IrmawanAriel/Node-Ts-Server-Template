import express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();  // Env load environment variables

// inisialization app as an express function
const app = express();

// buat app handler untuk route API for testing purposes   
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the API!' });
})

const Port = process.env.PORT || 8081;

app.listen(Port, () => {
    console.log(`Server is running on ${Port}`);
})

