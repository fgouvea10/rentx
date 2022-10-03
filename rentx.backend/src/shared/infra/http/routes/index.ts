import { Router } from "express";

import { authRoutes } from "./auth.routes";
import { carsRoutes } from "./cars.routes";
import { categoriesRoutes } from "./categories.routes";
import { passwordRoutes } from "./password.routes";
import { rentalRoutes } from "./rental.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

export const appRoutes = Router();

appRoutes.use("/categories", categoriesRoutes);
appRoutes.use("/specifications", specificationRoutes);
appRoutes.use("/users", usersRoutes);
appRoutes.use("/auth", authRoutes);
appRoutes.use("/cars", carsRoutes);
appRoutes.use("/rentals", rentalRoutes);
appRoutes.use("/password", passwordRoutes);
