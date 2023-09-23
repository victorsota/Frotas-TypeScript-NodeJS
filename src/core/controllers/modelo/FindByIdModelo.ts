import { Request, Response } from "express";
import { ModeloRepository } from "../../repositories/ModeloRepository";

export class FindByIdModelo {
  async findById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const modelo = await ModeloRepository.findOne({ where: { id } });
      return res.status(200).json(modelo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Erro ao Buscar modelo",
      });
    }
  }
}
