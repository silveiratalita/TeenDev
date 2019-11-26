import { Router } from 'express';
import PersonController from './app/controlllers/PersonController';

const routes = new Router();
routes.post("/pessoas", PersonController.store);
export default routes;
