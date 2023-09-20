import { Request, Response } from "express";
import { UserRepository } from "../../repositories/UserRepository";

// cria um novo usuario
export class CreateUserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Preencha todos os dados",
      });
    }

    //verifica se o email é valido
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Email inválido",
      });
    }

    // verifica se o email ja foi cadastrado
    const existingUser = await UserRepository.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        message: "Já existe um usuário com este email",
      });
    }

    try {
      const newUser = await UserRepository.create({ name, email, password });
      await UserRepository.save(newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erro ao criar usuário",
      });
    }
  }
}
