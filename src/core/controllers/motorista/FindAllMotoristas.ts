import { Request, Response } from "express";
import { MotoristaRepository } from "../../repositories/MotoristaRepository";

export class FindAllMotoristas {
  async list(req: Request, res: Response) {
    const motoristas = await MotoristaRepository.find({
      select: ["id", "nome", "cpf", "cnh", "telefone", "email", "ennderco"],
      relations: ["veiculo"],
    });
    return res.json(motoristas);
  }
}
