import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/inMemory/SpecificationsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create car specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory
    );
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car name",
      brand: "Brand",
      description: "Car from brand",
      categoryId: "category",
      dailyRate: 100,
      fineAmount: 60,
      licensePlate: "ABC-1234",
    });

    const specification = await specificationsRepositoryInMemory.create({
      name: "test",
      description: "test",
    });

    const specificationsId = [specification.id];

    const specificationsCars = await createCarSpecificationUseCase.execute({
      carId: car.id,
      specificationsId,
    });

    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });

  it("should not be able to add a new specification to a non-existing car", () => {
    expect(async () => {
      const carId = "1234";
      const specificationsId = ["54321"];

      await createCarSpecificationUseCase.execute({ carId, specificationsId });
    }).rejects.toBeInstanceOf(AppError);
  });
});
