import { Request, Response } from "express";
import { MotoristaRepository } from "../../repositories/MotoristaRepository";

export class FindAllMotoristas {
  async list(req: Request, res: Response) {
    const motoristas = await MotoristaRepository.find({
      select: ["id", "nome", "cpf", "telefone", "email", "cnh", "endereco"],
    });
    return res.json(motoristas);
  }
}
