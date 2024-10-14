import { client } from "../client";
import { Posts } from "../models/post";

class PlaceholderServices {
  public static async getAllPost(): Promise<any> {
    try {
      const response = await client.get("/posts/");
      return { dados: response.data };
    } catch (error: any) {
      throw new Error("Erro ao buscar dados: " + error.message);
    }
  }

  public static async getPostById(id: number): Promise<any> {
    try {
      const response = await client.get(`/posts/${id}`);
      if (response.data) {
        return { dados: response.data };
      } else {
        throw new Error("Post não encontrado.");
      }
    } catch (error: any) {
      throw new Error("Erro ao buscar dados: " + error.message);
    }
  }

  public static async createPost(postData: Posts): Promise<any> {
    try {
      const response = await client.post("/posts/", postData);
      return { dados: response.data };
    } catch (error: any) {
      throw new Error("Não foi possível criar o post: " + error.message);
    }
  }

  public static async updatePost(id: number, postData: Posts): Promise<any> {
    try {
      const response = await client.put(`/posts/${id}`, postData);
      return { dados: response.data };
    } catch (error: any) {
      throw new Error("Não foi possível atualizar o post: " + error.message);
    }
  }

  public static async deletePost(id: number): Promise<any> {
    try {
      await client.delete(`/posts/${id}`);
      return { mensagem: 'Post deletado com sucesso.' };
    } catch (error: any) {
      throw new Error("Não foi possível deletar o post: " + error.message);
    }
  }
}

export default PlaceholderServices;
