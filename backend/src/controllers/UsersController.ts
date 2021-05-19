import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  index(request: Request, response: Response) {
    return response.send({ userId: request.userId });
  }

  async store(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const { email, password } = request.body;

    const userExists = await userRepository.findOne({ where: { email } });

    if (userExists) {
      return response.sendStatus(409);
    }

    const data = { email, password };

    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const user = userRepository.create(data);
    await userRepository.save(user);

    return response.status(201).json(user);
  }
}

export default new UserController();
