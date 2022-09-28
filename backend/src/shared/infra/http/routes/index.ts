import { Router } from "express";
import { authRoutes } from "./auth.routes";

import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

export const appRoutes = Router();

appRoutes.use("/categories", categoriesRoutes);
appRoutes.use("/specifications", specificationRoutes);
appRoutes.use("/users", usersRoutes);
appRoutes.use("/auth", authRoutes);
