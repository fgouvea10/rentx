import { inject, injectable } from "tsyringe";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

@injectable()
export class ListRentalsUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository
  ) {}

  async execute(): Promise<Rental[]> {
    const rentals = await this.rentalsRepository.list();
    return rentals;
  }
}
