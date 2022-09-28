import "reflect-metadata";
import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { appRoutes } from "./routes";
import swaggerFile from "./swagger.json"; 

import "./database";
import "./shared/container";

const app = express();

app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/api/v1", appRoutes);

app.listen(process.env.SERVER_PORT, () => console.log("Server is running"));
