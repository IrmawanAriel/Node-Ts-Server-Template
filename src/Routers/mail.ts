import { Router } from "express";

const mailingrouter = Router();

mailingrouter.get('/mailing', ()=> {
    console.log('mailing route accessed');
})

export default mailingrouter;