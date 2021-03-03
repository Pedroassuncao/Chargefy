import {Router} from 'express';
import multer from 'multer';
import uploadConfig from './config/upload'; // configuracao de upload de imagens
import PcesController from './controllers/PcesController'; 


const routes = Router();
const upload = multer(uploadConfig);

// index, show, create, delete

routes.get('/pces', PcesController.index);
routes.get('/pces/:id', PcesController.show);
routes.post('/pces', upload.array('images') ,PcesController.create);


export default routes;