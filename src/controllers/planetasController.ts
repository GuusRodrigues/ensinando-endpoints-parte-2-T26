import { Request, response, Response } from "express";
import PlanetaServices from "../services/planetaServices";


// controller nao pode ter lógica de negócio, apenas chamar o service
// ela serve para tratar os erros e deixá-los mais amigáveis para o usuário
// deve-se usar condicionais, try catch, etc. para tratar os erros
// e devolver uma resposta amigável para o usuário
// pesquise sobre status code e como usá-los para tratar erros de forma eficiente e amigável
// mas também atente-se para não expor informações sensíveis ao usuário
class PlanetasController {
  static getAllPlanetas = async (req: Request, res: Response) => {
    
    res.status(200).json(await PlanetaServices.getAllPlanets());
  };

  static getPlanetaById = async (req: Request, res: Response) => {

    const id = req.params.id;
    res.status(200).json (await PlanetaServices.getPlanetaById(Number(id)));
  }

  static createPlaneta = async (req: Request, res: Response) => {

    const planetaData = req.body;
    res.status(201).json(await PlanetaServices.createPlaneta(planetaData));
  }

  static updatePlaneta = async (req: Request, res: Response) => {

    const id = req.params.id;
    const planetaData = req.body;
    res.status(200).json(await PlanetaServices.updatePlaneta(Number(id), planetaData));
  }

  static deletePlaneta = async (req: Request, res: Response) => {

    const id = req.params.id;
    res.status(204).json(await PlanetaServices.deletePlaneta(Number(id)));
  }

}

export { PlanetasController };


