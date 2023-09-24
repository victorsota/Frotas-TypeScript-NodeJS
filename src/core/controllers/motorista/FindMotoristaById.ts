import { Request, Response } from "express";
import { MotoristaRepository } from "../../repositories/MotoristaRepository";

export class FindByIdMotorista {
  async findById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const motorista = await MotoristaRepository.findOne({ where: { id } });
      return res.status(200).json(motorista);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erro ao Buscar motorista",
      });
    }
  }
}
