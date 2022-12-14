import { inject, injectable } from "tsyringe";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";

interface UploadCarImageRequest {
  carId: string;
  imagesName: string[];
}

@injectable()
export class UploadCarImageUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImagesRepository
  ) {}

  async execute({ carId, imagesName }: UploadCarImageRequest): Promise<void> {
    imagesName.map(async (image) => {
      await this.carsImagesRepository.create(carId, image);
    });
  }
}
