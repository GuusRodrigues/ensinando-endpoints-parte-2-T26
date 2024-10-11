import { Router } from "express";
import { PlanetasController } from "../controllers/planetasController";

export const planetasRouter = Router();

planetasRouter.get("/planetas", PlanetasController.getAllPlanetas);
planetasRouter.get("/planetas/:id", PlanetasController.getPlanetaById);
planetasRouter.post("/planetas", PlanetasController.createPlaneta);
planetasRouter.put("/planetas/:id", PlanetasController.updatePlaneta);
planetasRouter.delete("/planetas/:id", PlanetasController.deletePlaneta);