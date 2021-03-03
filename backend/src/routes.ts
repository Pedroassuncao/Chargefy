import {Router} from 'express';
import PcesController from './controllers/PcesController'; 

const routes = Router();

routes.post('/pces', PcesController.create);

export default routes;