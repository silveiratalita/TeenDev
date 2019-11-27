import { Router } from 'express';
import PersonController from './app/controlllers/PersonController';
import JourneyController from './app/controlllers/JourneyController';

const routes = new Router();

routes.post("/pessoas", PersonController.store);
routes.post("/jornadas", JourneyController.store);

export default routes;
