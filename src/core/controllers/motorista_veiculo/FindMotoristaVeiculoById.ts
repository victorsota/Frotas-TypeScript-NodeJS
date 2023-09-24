import { Request, Response } from "express";
import { MotoristaVeiculoRepository } from "../../repositories/MotoristaVeiculoRepository";

export class FindByIdMotoristaVeiculo {
  async findById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const motoristaVeiculo = await MotoristaVeiculoRepository.findOne({
        where: { id },
        relations: ["motorista", "veiculo"],
      });
      return res.status(200).json(motoristaVeiculo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erro ao Buscar motorista_veiculo",
      });
    }
  }
}
