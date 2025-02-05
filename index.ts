import express from 'express';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import MainRoute from './src/Routers/index';
import cors from "cors"; // Import cors
import { updateRecordHandler } from './src/Handlers/UpdateRecord';


dotenv.config();  // Env load environment variables

// inisialization app as an express function
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// buat app handler untuk route API for testing purposes   
app.get('', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the API!' });
})

app.use(cors({
    origin: ['https://vantage-office.kintone.com', "https://vantage-office.kintone.com"], // Izinkan semua origin (ubah jika perlu)
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    credentials: true
}));

const Port = process.env.PORT || 8081;

app.listen(Port, async () => {
    console.log(`Server is running on ${Port}`);
    await updateRecordHandler();
})

app.use(MainRoute); // call the main route here

export default app;
