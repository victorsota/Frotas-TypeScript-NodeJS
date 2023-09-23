import { Request, Response } from "express";
import { ModeloRepository } from "../../repositories/ModeloRepository";

export class FindAllModelos {
  // lsita todos os modelos
  async list(req: Request, res: Response) {
    const modelos = await ModeloRepository.find({
      select: ["id", "modelo", "marca", "cor", "ano", "combustivel"],
    });
    return res.json(modelos);
  }
}
