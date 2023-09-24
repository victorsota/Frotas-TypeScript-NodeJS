import { Request, Response } from "express";
import { VeiculoRepository } from "../../repositories/VeiculoRepository";

export class FindVeiculoById {
  async findById(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const veiculo = await VeiculoRepository.findOne({ where: { id } });
      return response.status(200).json(veiculo);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: "Erro ao Buscar veiculo",
      });
    }
  }
}
