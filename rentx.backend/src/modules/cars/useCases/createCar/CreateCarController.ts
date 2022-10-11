import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

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
      image,
    } = request.body;

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
