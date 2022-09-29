import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
// import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Car name",
      brand: "Brand",
      description: "Car from brand",
      categoryId: "category",
      dailyRate: 100,
      fineAmount: 60,
      licensePlate: "ABC-1234",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a new car with an existing license plate", async () => {
    const car = await createCarUseCase.execute({
      name: "Car1",
      brand: "Brand",
      description: "Car from brand",
      categoryId: "category",
      dailyRate: 100,
      fineAmount: 60,
      licensePlate: "ABCD-1234",
    });

    expect(car.available).toBe(true);
  });
});
