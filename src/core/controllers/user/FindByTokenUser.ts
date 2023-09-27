import { Request, Response } from "express";
import { UserRepository } from "../../repositories/UserRepository";
import * as jwt from "jsonwebtoken";

export class UserController {
  // Endpoint para buscar dados do usuário com base no token
  async getUserByToken(req: Request, res: Response) {
    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token de autenticação ausente" });
    }

    try {
      const decodedToken: any = jwt.verify(token, "chave_secreta");

      if (!decodedToken.userId) {
        return res.status(401).json({ message: "Token inválido" });
      }

      // Busque os dados do usuário com base no ID do usuário no token
      const user = await UserRepository.findOne(decodedToken.userId);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      // Retorne os dados do usuário
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Token inválido" });
    }
  }
}
