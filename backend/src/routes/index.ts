import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

export const appRoutes = Router();

appRoutes.use("/categories", categoriesRoutes);
appRoutes.use("/specifications", specificationRoutes);
appRoutes.use("/users", usersRoutes);
