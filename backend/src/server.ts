import express from 'express';
import { getRepository } from  'typeorm';
import Pce from './models/Pce';

import './database/connection';

const app = express();

app.use(express.json());


app.post('/pces', async (request, response) => {
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
    return response.json({ message: 'Hello World'});
});

app.listen(3333);