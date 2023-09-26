import { Request, Response } from "express";
import { VeiculoRepository } from "../../repositories/VeiculoRepository";
import { ModeloRepository } from "../../repositories/ModeloRepository";
import { VeiculoEntity } from "../../entities/VeiculoEntity";

export class CreateVeiculo {
  async create(req: Request, res: Response) {
    const { modeloId, placa, chassi, renavam, status } = req.body;

    if (!modeloId || !placa || !chassi || !renavam) {
      return res.status(400).json({
        message: "Preencha todos os dados",
      });
    }

    try {
      const modeloIdString = modeloId.toString();

      const modelo = await ModeloRepository.findOneBy({
        id: modeloIdString,
      });
      if (!modelo) {
        return res
          .status(400)
          .json({ message: "Modelo de veiculo não existe" });
      }
      const veiculo = new VeiculoEntity();
      veiculo.modelo = modelo;
      veiculo.placa = placa;
      veiculo.chassi = chassi;
      veiculo.renavam = renavam;
      veiculo.status = status;

      await VeiculoRepository.save(veiculo);
      return res.status(201).json(veiculo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erro ao criar veiculo",
      });
    }
  }
}
