import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

interface File {
  filename: string;
}

export class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      brand,
      categoryId,
      dailyRate,
      description,
      fineAmount,
      licensePlate,
      name,
    } = request.body;

    const image = request.file.filename;

    console.log('image', image);
    console.log('body', request.body);

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      brand,
      categoryId,
      dailyRate,
      description,
      fineAmount,
      licensePlate,
      name,
      image,
    });

    return response.status(201).json(car);
  }
}
