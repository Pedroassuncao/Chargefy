import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads') // caminho onde vai guardar os uploads de imagens, é feito desta forma para funcionar no windows e linux por causa dos / \
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`; // timestamp + nome do file para evitar imagens com o mesmo nome serem sobrescritas

            cb(null, fileName);
        },
    })
};