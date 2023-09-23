import { Request, Response } from "express";
import { VeiculoRepository } from "../../repositories/VeiculoRepository";

export class FindAllVeiculos {
  async list(req: Request, res: Response) {
    const veiculos = await VeiculoRepository.find({
      select: ["id", "placa", "chassi", "renavam"],
      relations: ["modelo"],
    });
    return res.json(veiculos);
  }
}
