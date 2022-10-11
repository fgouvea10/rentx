import "reflect-metadata";
import "dotenv/config";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import { appRoutes } from "./routes";
import swaggerFile from "../../../swagger.json";
import { AppError } from "@shared/errors/AppError";

import "@shared/infra/typeorm";
import "@shared/container";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/api/v1", appRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError)
      return response.status(err.statusCode).json({
        success: false,
        status: "error",
        code: err.code,
        message: err.message,
      });

    return response.status(500).json({
      success: false,
      status: "error",
      code: 'internal.server.error',
      message: `Internal Server Error - ${err.message}`,
    });
  }
);

app.listen(process.env.SERVER_PORT, () => console.log("Server is running"));
