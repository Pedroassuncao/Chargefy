import {Request, Response} from 'express';
import { getRepository } from  'typeorm';
import Pce from '../models/Pce';

export default {

    async create(request: Request, response: Response) {
            // decompor request
    const {
        name,
        latitude,
        longitude,
        about,
        charger_type,
        opening_hours,
    } = request.body

    const pcesRepository = getRepository(Pce); //model dentro do file Pce.ts

    const pce = pcesRepository.create({
        name,
        latitude,
        longitude,
        about,
        charger_type,
        opening_hours,
    });

   await pcesRepository.save(pce);


    console.log(request.body);
    return response.status(201).json(pce);
    }
};