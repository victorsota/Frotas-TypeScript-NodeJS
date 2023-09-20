import { Request, Response } from "express";

export class RotaAuth {
  async autentication(req: Request, res: Response) {
    res.status(200).json({ message: "Autenticado com sucesso" });
  }
}
