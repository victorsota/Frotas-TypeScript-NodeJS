import { Request, Response } from "express";
import { MotoristaRepository } from "../../repositories/MotoristaRepository";

export class CreateMotorista {
  async create(request: Request, response: Response) {
    const { nome, cpf, telefone, email, cnh } = request.body;
    try {
      const motorista = await MotoristaRepository.create({
        nome,
        cpf,
        telefone,
        email,
        cnh,
      });
      return response.status(200).json(motorista);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: "Erro ao Criar motorista",
      });
    }
  }
}
