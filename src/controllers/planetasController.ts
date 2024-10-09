import { Request, Response } from "express";
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
}

export { PlanetasController };
