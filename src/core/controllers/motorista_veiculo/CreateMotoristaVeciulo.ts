import { Request, Response } from "express";
import { MotoristaVeiculoRepository } from "../../repositories/MotoristaVeiculoRepository";
import { MotoristaRepository } from "../../repositories/MotoristaRepository";
import { MotoristaVeiculoEntity } from "../../entities/MotoristaVeiculoEntity";
import { VeiculoRepository } from "../../repositories/VeiculoRepository";

export class CreateMotoristaVeiculo {
  async create(req: Request, res: Response) {
    const { motoristaId, veiculoId } = req.body;

    if (!motoristaId || !veiculoId) {
      return res.status(400).json({
        message: "Dados Incompletos",
      });
    }

    try {
      const motoristaIdString = motoristaId.toString();
      const motorista = await MotoristaRepository.findOneBy({
        id: motoristaIdString,
      });

      if (!motorista) {
        return res.status(400).json({
          message: "Motorista não existe",
        });
      }

      const veiculoIdString = veiculoId.toString();
      const veiculo = await VeiculoRepository.findOneBy({
        id: veiculoIdString,
      });

      if (!veiculo) {
        return res.status(400).json({
          message: "Veiculo não existe",
        });
      }

      const newMotoristaVeiculo = new MotoristaVeiculoEntity();
      newMotoristaVeiculo.motorista = motorista;
      newMotoristaVeiculo.veiculo = veiculo;

      await MotoristaVeiculoRepository.save(newMotoristaVeiculo);
      return res.status(200).json(newMotoristaVeiculo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erro ao Criar motorista_veiculo",
      });
    }
  }
}
