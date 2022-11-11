import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetCarByIdUseCase } from "./GetCarByIdUseCase";

export class GetCarByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getCarByIdUseCase = container.resolve(GetCarByIdUseCase);

    const car = await getCarByIdUseCase.execute(id);

    return response.status(200).json(car);
  }
}
