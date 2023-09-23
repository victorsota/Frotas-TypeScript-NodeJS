import { Request, Response } from "express";
import { ModeloRepository } from "../../repositories/ModeloRepository";

export class CreateModelo {
  async create(req: Request, res: Response) {
    const { modelo, marca, ano, cor, combustivel } = req.body;

    if (!modelo || !marca || !ano || !cor || !combustivel) {
      return res.status(400).json({
        message: "Preencha todos os dados",
      });
    }

    try {
      const newModelo = await ModeloRepository.create({
        modelo,
        marca,
        ano,
        cor,
        combustivel,
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
