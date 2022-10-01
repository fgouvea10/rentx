import dayjs from "dayjs";

import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/inMemory/RentalsRepositoryInMemory";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/inMemory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { DayJSDateProvider } from "@shared/container/providers/DateProvider/implementations/DayJSDateProvider";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let dayJSProvider: DayJSDateProvider;

describe("Create rental", () => {
  const add24Hours = dayjs().add(1, "day").toDate();

  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayJSProvider = new DayJSDateProvider();
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayJSProvider,
      carsRepositoryInMemory
    );
  });

  it("should be able to create a new rental", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car test",
      description: "Car test description",
      dailyRate: 100,
      licensePlate: "test",
      fineAmount: 40,
      categoryId: "1234",
      brand: "brand",
    });

    const rental = await createRentalUseCase.execute({
      userId: "123",
      carId: car.id,
      expectedReturnDate: add24Hours,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("startDate");
  });

  it("should not be able to create a new rental if there is another rental open to the same user", () => {
    expect(async () => {
      await createRentalUseCase.execute({
        userId: "555",
        carId: "999",
        expectedReturnDate: add24Hours,
      });

      await createRentalUseCase.execute({
        userId: "555",
        carId: "999",
        expectedReturnDate: add24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if there is another rental open to the same car", () => {
    expect(async () => {
      await createRentalUseCase.execute({
        userId: "123",
        carId: "777",
        expectedReturnDate: add24Hours,
      });

      await createRentalUseCase.execute({
        userId: "321",
        carId: "777",
        expectedReturnDate: add24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental with invalid return time", () => {
    expect(async () => {
      await createRentalUseCase.execute({
        userId: "123",
        carId: "777",
        expectedReturnDate: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
