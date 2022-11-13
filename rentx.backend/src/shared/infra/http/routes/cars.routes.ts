import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
// import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";
import { UploadCarImageController } from "@modules/cars/useCases/uploadCarImage/UploadCarImageController";
import { GetCarByIdController } from "@modules/cars/useCases/getCarById/GetCarByIdController";

export const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImageController();
const getCarByIdController = new GetCarByIdController();

const uploadCarImages = multer(uploadConfig.upload("./tmp/cars"));
const uploadCarImage = multer(uploadConfig.upload("./tmp/cars"));
// const upload = multer({ dest: "./tmp/cars" });

carsRoutes.get("/available", listAvailableCarsController.handle);

carsRoutes.post(
  "/",
  ensureAuthenticated,
  uploadCarImage.single("image"),
  // ensureAdmin,
  createCarController.handle
);

carsRoutes.get("/:id", ensureAuthenticated, getCarByIdController.handle);

carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  // ensureAdmin,
  createCarSpecificationController.handle
);

carsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  // ensureAdmin,
  uploadCarImages.array("images"),
  uploadCarImagesController.handle
);
