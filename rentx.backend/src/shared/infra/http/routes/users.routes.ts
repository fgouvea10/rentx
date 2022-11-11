import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

import uploadConfig from "@config/upload";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { GetUserController } from "@modules/accounts/useCases/getUser/GetUserController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

export const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const getUserController = new GetUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch(
  "/",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);
usersRoutes.get("/me", ensureAuthenticated, getUserController.handle);

usersRoutes.get("/:id", ensureAuthenticated, getUserController.handle);
