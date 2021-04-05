import express, {Request, Response} from 'express';
import { getRepository } from  'typeorm';
import Pce from '../models/Pce';
import pceView from '../views/pces_view';
import * as Yup from 'yup';

export default {
    // listar pces
    async index(request: Request, response: Response) {
        const pcesRepository = getRepository(Pce);

        const pces = await pcesRepository.find({
            relations: ['images']
        });

        return response.json(pceView.renderMany(pces));
    },

    async show(request: Request, response: Response) {
        const  { id } = request.params;

        const pcesRepository = getRepository(Pce);

        const pce = await pcesRepository.findOneOrFail(id, {
            relations: ['images']});

        return response.json(pceView.render(pce)); 
    },



    async create(request: Request, response: Response) {
            // decompor request
    const {
        name,
        latitude,
        longitude,
        about,
        charger_type,
        opening_hours,
    } = request.body;

    const pcesRepository = getRepository(Pce); //model dentro do file Pce.ts

    const requestImages = request.files as Express.Multer.File[]; //hack para upload de multiplos files

    const images = requestImages.map(image => {
        return { path: image.filename }
    });

    const data = {
        name,
        latitude,
        longitude,
        about,
        charger_type,
        opening_hours,
        images
    };

    // validacao dos dados inseridos na BD
    const schema = Yup.object().shape({
        name: Yup.string().required(), // preencher o require caso quiser alguma mensagem para o erro 'mensagem'
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),
        charger_type: Yup.string().required(),
        opening_hours: Yup.string().required(),
        images: Yup.array(Yup.object().shape({
            path: Yup.string().required()
        }))
    });
    // falha a insercao no caso de encontrar algum erro
    await schema.validate(data, {
        abortEarly: false,
    });

    const pce = pcesRepository.create(data);

   await pcesRepository.save(pce);


    console.log(request.body);
    return response.status(201).json(pce);
    }
};