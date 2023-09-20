import { Request, Response } from "express";
import { UserRepository } from "../../repositories/UserRepository";

export class FindAllUsers {
  // lsita todos os usuarios
  async list(req: Request, res: Response) {
    const users = await UserRepository.find({
      select: ["id", "name", "email"],
    });
    return res.json(users);
  }
}
