import { Router } from 'express';
import PcesController from './controllers/PcesController';
import UserController from './controllers/UsersController';
import AuthController from './controllers/AuthController';
import authMiddleware from './middlewares/authMiddleware';

import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/pces', PcesController.index);
routes.get('/pces/:id', PcesController.show);
routes.post('/pces', upload.array('images'), PcesController.create);
routes.post('/pces/update/:id', PcesController.update);
routes.post('/pces/remove/:id', PcesController.remove);

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authenticate);
routes.get('/users', authMiddleware, UserController.index);

export default routes;
