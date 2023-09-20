import { Request, Response } from "express";
import { UserRepository } from "../../repositories/UserRepository";

export class LoginUser {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
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

    try {
      const user = await UserRepository.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({
          message: "Dados inválidos",
        });
      }

      if (user.password !== password) {
        return res.status(400).json({
          message: "Dados inválidos",
        });
      }

      return res.status(200).json("Logado com sucesso");
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erro ao efetuar login",
      });
    }
  }
}
