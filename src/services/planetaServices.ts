
import { client } from "../client";
import { Planeta } from "../models/planetas";

class PlanetaServices {
  public static async getAllPlanets(): Promise<any> {
    let listaPlanetas: Planeta[] = [];

    try {
      let response = await client.get("/planets/")
      listaPlanetas.push(response.data.results);

      while (response.data.next) {
        response = await client.get(response.data.next);
        listaPlanetas.push(...response.data.results);
      }

      if (listaPlanetas.length > 0) {
        return listaPlanetas;
      } else {
        return "Error fetching data";
      }

    } catch (error) {
      return `Error fetching data: ${error}`;
    }

  }

  public static async getPlanetaById(id: number): Promise <any> {

    try {
        let response = await client.get(`/planets/${id}`)
        if(response.data){
            return response.data
        }else{
            return 'Planeta não encontrado!!!'
        }
    } catch  (error){
        return `{Error fetching data: ${error}`;
    }
  }

  public static async createPlaneta (planetaData: Planeta): Promise <any> {

    try {
        let response = await client.post("/planets/", planetaData)
        return response.data
    } catch  (error){
        return `{Não foi possível criar o planeta: ${error}`;
    }

  }

  public static async updatePlaneta (id: number, planetaData: Planeta): Promise <any> {

    try {
        let response = await client.put(`/planets/${id}`, planetaData)
        return response.data
    } catch  (error){
        return `{Não foi possível atualizar o planeta: ${error}`;
    }
  }

  public static async deletePlaneta (id: number): Promise <any> {
    try {
        let response = await client.delete(`/planets/${id}`)
        return response.data
    } catch  (error){
        return `{Não foi possível deletar o planeta: ${error}`;
    }
  }


}

export default PlanetaServices;
