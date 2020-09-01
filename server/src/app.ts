import { config } from "dotenv";
config();

import express from "express";
import cors from "cors";

import mentorRoutes from "./routes/challenge.routes";

//Settings
const app = express();
app.set("PORT", process.env.PORT || 4000);

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", mentorRoutes);

export default app;
