import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/useCases/listRentalsByUser/listRentalsByUserController";
import { ListRentalsController } from "@modules/rentals/useCases/listRentals/ListRentalsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

export const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const listRentalsController = new ListRentalsController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);

rentalRoutes.get(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  listRentalsController.handle
);

rentalRoutes.post(
  "/devolution/:id",
  ensureAuthenticated,
  devolutionRentalController.handle
);

rentalRoutes.get(
  "/user",
  ensureAuthenticated,
  listRentalsByUserController.handle
);
