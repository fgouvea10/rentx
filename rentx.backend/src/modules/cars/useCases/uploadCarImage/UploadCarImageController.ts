import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadCarImageUseCase } from "./UploadCarImageUseCase";

interface Files {
  filename: string;
}

export class UploadCarImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as Files[];

    const uploadCarImageUseCase = container.resolve(UploadCarImageUseCase);

    const fileNames = images.map((file) => file.filename);

    await uploadCarImageUseCase.execute({
      carId: id,
      imagesName: fileNames,
    });

    return response.status(201).send();
  }
}
