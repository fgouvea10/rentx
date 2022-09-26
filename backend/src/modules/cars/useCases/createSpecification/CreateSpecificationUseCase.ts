import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface CreateSpecificationRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: CreateSpecificationRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists)
      throw new Error("Specification already exists");

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
