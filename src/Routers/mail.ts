import { Response, Request, Router } from "express";

const mailingrouter = Router();

mailingrouter.get('/get', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the API!' });
})

export default mailingrouter;