import express, {Request, Response} from 'express';
import { getRepository } from  'typeorm';
import Pce from '../models/Pce';

export default {
    // listar pces
    async index(request: Request, response: Response) {
        const pcesRepository = getRepository(Pce);

        const pces = await pcesRepository.find({
            relations: ['images']
        });

        return response.json(pces);
    },

    async show(request: Request, response: Response) {
        const  { id } = request.params;

        const pcesRepository = getRepository(Pce);

        const pce = await pcesRepository.findOneOrFail(id, {
            relations: ['images']});

        return response.json(pce);
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
    })

    const pce = pcesRepository.create({
        name,
        latitude,
        longitude,
        about,
        charger_type,
        opening_hours,
        images
    });

   await pcesRepository.save(pce);


    console.log(request.body);
    return response.status(201).json(pce);
    }
};