import { Router } from "express";
import { updateRecordHandler } from "../Handlers/UpdateRecord";

const MainRoute = Router();

MainRoute.use('/updater', updateRecordHandler) ;

export default MainRoute;

