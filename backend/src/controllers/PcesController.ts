import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Pce from '../models/Pce';

import pceView from '../views/pce_view';

import * as Yup from 'yup';

export default {
  async index(request: Request, response: Response) {
    const pcesRepository = getRepository(Pce);

    const pces = await pcesRepository.find({
      relations: ['images'],
    });

    return response.json(pceView.renderMany(pces));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const pcesRepository = getRepository(Pce);

    const pce = await pcesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(pceView.render(pce));
  },

  async create(request: Request, response: Response) {
    console.log(request.files);

    const {
      name,
      latitude,
      longitude,
      about,
      charger_type,
      opening_hours,
      approved,
    } = request.body;
    const pcesRepository = getRepository(Pce);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      charger_type,
      opening_hours,
      images,
      approved: approved === 'false',
  };
      

    const schema = Yup.object().shape({
      name: Yup.string().required(), // preencher o require caso quiser alguma mensagem para o erro 'mensagem'
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      charger_type: Yup.string().required(),
      opening_hours: Yup.string().required(),
      images: Yup.array(Yup.object().shape({
          path: Yup.string().required()
      })),
      approved: Yup.boolean().required(),
  });

    await schema.validate(data, {
      abortEarly: false,
    });

    const pce = pcesRepository.create(data);

    await pcesRepository.save(pce);

    return response.status(201).json(pce);
  },

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const pceRepository = getRepository(Pce);

    const pce = await pceRepository.update(id, { approved: true });

    return response.status(200).json(pce);
  },

  async remove(request: Request, response: Response) {
    const { id } = request.params;

    const pceRepository = getRepository(Pce);

    const pce = await pceRepository.findOne({ where: { id } });

    await pceRepository.delete(pce);

    return response.status(200).json(pce);
  },
};
