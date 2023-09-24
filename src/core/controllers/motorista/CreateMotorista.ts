import { Request, Response } from "express";
import { MotoristaRepository } from "../../repositories/MotoristaRepository";

export class CreateMotorista {
  async create(req: Request, res: Response) {
    const { nome, cpf, telefone, email, cnh, endereco } = req.body;

    if (!nome || !cpf || !telefone || !email || !cnh || !endereco) {
      return res.status(400).json({
        message: "Dados Incompletos",
      });
    }

    //validacao de email
    if (!email.includes("@")) {
      return res.status(400).json({
        message: "Email invalido",
      });
    }

    try {
      const newMotorista = await MotoristaRepository.create({
        nome,
        cpf,
        endereco,
        telefone,
        email,
        cnh,
      });
      await MotoristaRepository.save(newMotorista);
      return res.status(200).json(newMotorista);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erro ao Criar motorista",
      });
    }
  }
}
