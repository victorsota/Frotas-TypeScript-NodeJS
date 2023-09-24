import { Request, Response } from "express";
import { MotoristaVeiculoRepository } from "../../repositories/MotoristaVeiculoRepository";

export class FindAllMotoristaVeiculos {
  async list(req: Request, res: Response) {
    const motoristaVeiculos = await MotoristaVeiculoRepository.find({
      relations: ["motorista", "veiculo"],
    });
    return res.json(motoristaVeiculos);
  }
}
