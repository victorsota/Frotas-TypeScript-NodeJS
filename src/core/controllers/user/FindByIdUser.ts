import { Request, Response } from "express";
import { UserRepository } from "../../repositories/UserRepository";

export class FindUserById {
  async findById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await UserRepository.findOne({ where: { id } });
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erro ao Buscar usuário",
      });
    }
  }
}
