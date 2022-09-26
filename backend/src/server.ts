import express from "express";

import { appRoutes } from "./routes";

const app = express();

app.use(express.json());

app.use('/api/v1', appRoutes);

app.listen(8000, () => console.log("Server is running"));
