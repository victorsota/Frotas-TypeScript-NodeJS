import { Request, Response } from "express";
import { MotoristaRepository } from "../../repositories/MotoristaRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { MotoristaEntity } from "../../entities/MotoristaEntity";

export class CreateMotorista {
  async create(req: Request, res: Response) {
    const { nome, cpf, telefone, email, cnh, endereco, userId, status } =
      req.body;

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
      const userIdString = userId.toString();

      const user = await UserRepository.findOneBy({
        id: userIdString,
      });

      if (!user) {
        return res.status(400).json({
          message: "Usuário não encontrado",
        });
      }
      const motorista = new MotoristaEntity();
      motorista.nome = nome;
      motorista.cpf = cpf;
      motorista.telefone = telefone;
      motorista.email = email;
      motorista.cnh = cnh;
      motorista.endereco = endereco;
      motorista.user = user;
      motorista.status = status;

      await MotoristaRepository.save(motorista);
      return res.status(201).json(motorista);
    } catch (error: any) {
      console.log("Erro ao criar motorista:", error.message);
      return res.status(500).json({
        message: "Erro ao Criar motorista",
      });
    }
  }
}
