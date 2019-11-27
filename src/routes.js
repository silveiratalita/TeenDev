import { Router } from 'express';
import PersonController from './app/controlllers/PersonController';
import JourneyController from './app/controlllers/JourneyController';

const routes = new Router();

routes.post("/people", PersonController.store);
routes.post("/journey", JourneyController.store);

export default routes;
