import { Router } from "express";
import appointmentsRouter from "./appointements.router";





const routes = Router()

routes.use('/appointments', appointmentsRouter)




export default  routes;
