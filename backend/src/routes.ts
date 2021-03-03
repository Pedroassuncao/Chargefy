import {Router} from 'express';
import PcesController from './controllers/PcesController'; 

const routes = Router();

// index, show, create, delete

routes.get('/pces', PcesController.index);
routes.get('/pces/:id', PcesController.show);
routes.post('/pces', PcesController.create);


export default routes;