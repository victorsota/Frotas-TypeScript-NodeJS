import { Request, Response } from "express";
import { ModeloRepository } from "../../repositories/ModeloRepository";
import { UserRepository } from "../../repositories/UserRepository";

export class CreateModelo {
  async create(req: Request, res: Response) {
    const { modelo, marca, ano, cor, combustivel, userId, status } = req.body;

    if (!modelo || !marca || !ano || !cor || !combustivel) {
      return res.status(400).json({
        message: "Preencha todos os dados",
      });
    }

    try {
      const userIdString = userId.toString();

      const user = await UserRepository.findOneBy({
        id: userIdString,
      });

      if (!user) {
        return res.status(400).json({
          message: "Usuário não encontrado",
        });
      }

      const newModelo = await ModeloRepository.create({
        user,
        modelo,
        marca,
        ano,
        cor,
        combustivel,
        status,
      });
      await ModeloRepository.save(newModelo);
      return res.status(201).json(newModelo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erro ao criar modelo",
      });
    }
  }
}
