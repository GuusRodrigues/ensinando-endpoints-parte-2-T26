import { Request, Response } from "express";
import PlaceholderServices from "../services/placeholderServices";
import { Posts } from "../models/post";

class PostController {
  static getAllPost = async (req: Request, res: Response) => {
    try {
      const resultado = await PlaceholderServices.getAllPost();
      return res.status(200).json({ dados: resultado.dados });
    } catch (error: any) {
      return res.status(500).json({ erro: "Erro ao buscar posts. Tente novamente mais tarde." });
    }
  };

  static getPostById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const resultado = await PlaceholderServices.getPostById(Number(id));
      if (resultado.erro) {
        return res.status(404).json({ erro: "Post não encontrado." });
      }
      return res.status(200).json({ dados: resultado.dados });
    } catch (error: any) {
      return res.status(500).json({ erro: "Erro ao buscar o post. Tente novamente mais tarde." });
    }
  };

  static createPost = async (req: Request, res: Response) => {
    const postData: Posts = req.body;
    try {
      const resultado = await PlaceholderServices.createPost(postData);
      return res.status(201).json({ dados: resultado.dados });
    } catch (error: any) {
      return res.status(400).json({ erro: "Não foi possível criar o post. Verifique os dados e tente novamente." });
    }
  };

  static updatePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const postData: Posts = req.body;
    try {
      const resultado = await PlaceholderServices.updatePost(Number(id), postData);
      if (resultado.erro) {
        return res.status(400).json({ erro: "Não foi possível atualizar o post. Verifique os dados e tente novamente." });
      }
      return res.status(200).json({ dados: resultado.dados });
    } catch (error: any) {
      return res.status(500).json({ erro: "Erro ao atualizar o post. Tente novamente mais tarde." });
    }
  };

  static deletePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const resultado = await PlaceholderServices.deletePost(Number(id));
      if (resultado.erro) {
        return res.status(400).json({ erro: "Não foi possível deletar o post." });
      }
      return res.status(204).send(); // No Content
    } catch (error: any) {
      return res.status(500).json({ erro: "Erro ao deletar o post. Tente novamente mais tarde." });
    }
  };
}

export { PostController };
