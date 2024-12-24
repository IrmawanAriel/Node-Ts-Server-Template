import express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import MainRoute from './src/Routers/index';

dotenv.config();  // Env load environment variables

// inisialization app as an express function
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// buat app handler untuk route API for testing purposes   
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the API!' });
})

const Port = process.env.PORT || 8081;

app.listen(Port, () => {
    console.log(`Server is running on ${Port}`);
})

app.use(MainRoute); // call the main route here

export default app;
