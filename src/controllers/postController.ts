import { Request, Response } from "express";
import PlaceholderServices from "../services/placeholderServices";
import { Posts } from "../models/post";

class PostController {
  static getAllPost = async (req: Request, res: Response) => {
    const resultado = await PlaceholderServices.getAllPost();
    if (resultado.erro) {
      return res.status(500).json({ erro: resultado.erro });
    }
    res.status(200).json({ dados: resultado.dados });
  };

  static getPostById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const resultado = await PlaceholderServices.getPostById(Number(id));
    if (resultado.erro) {
      return res.status(404).json({ erro: resultado.erro });
    }
    res.status(200).json({ dados: resultado.dados });
  };

  static createPost = async (req: Request, res: Response) => {
    const postData: Posts = req.body;
    const resultado = await PlaceholderServices.createPost(postData);
    if (resultado.erro) {
      return res.status(400).json({ erro: resultado.erro });
    }
    res.status(201).json({ dados: resultado.dados });
  };

  static updatePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const postData: Posts = req.body;
    const resultado = await PlaceholderServices.updatePost(Number(id), postData);
    if (resultado.erro) {
      return res.status(400).json({ erro: resultado.erro });
    }
    res.status(200).json({ dados: resultado.dados });
  };

  static deletePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const resultado = await PlaceholderServices.deletePost(Number(id));
    if (resultado.erro) {
      return res.status(400).json({ erro: resultado.erro });
    }
    res.status(204).send(); // No Content
  };
}

export { PostController };
