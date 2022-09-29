import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeAll(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "carBrand",
      categoryId: "categoryId",
      dailyRate: 140,
      description: "Car description test",
      fineAmount: 100,
      licensePlate: "XXX-000",
      name: "Car Test",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "carBrandTest",
      categoryId: "categoryId",
      dailyRate: 140,
      description: "Car description test",
      fineAmount: 100,
      licensePlate: "XXX-000",
      name: "Car Test 2",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "carBrandTest",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "carBrandTwo",
      categoryId: "categoryId",
      dailyRate: 140,
      description: "Car description test",
      fineAmount: 100,
      licensePlate: "FFF-000",
      name: "Car3",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "carBrandTwo",
      categoryId: "12344556",
      dailyRate: 140,
      description: "Car description test",
      fineAmount: 100,
      licensePlate: "FFF-000",
      name: "Car3",
    });

    const cars = await listAvailableCarsUseCase.execute({
      categoryId: "12344556",
    });

    expect(cars).toEqual([car]);
  });
});
